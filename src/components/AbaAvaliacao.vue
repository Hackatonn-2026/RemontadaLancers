<template>
  <div>
    <div class="resumo">
      <h2 class="nota-media">{{ profissional.rating.toFixed(1) }}</h2>
      <p class="estrelas">{{ estrelas }}</p>
      <p class="total">
        Baseado em {{ reviews.length }}
        {{ reviews.length === 1 ? 'avaliação' : 'avaliações' }}
      </p>
    </div>

    <form class="form-avaliacao" @submit.prevent="salvarAvaliacao">
      <h3>{{ modoEdicao ? 'Editar avaliação' : 'Deixar uma avaliação' }}</h3>

      <div class="campo">
        <label for="autor">Nome</label>
        <input id="autor" v-model="form.autor" type="text" placeholder="Seu nome" required />
      </div>

      <div class="campo">
        <label for="nota">Nota</label>
        <select id="nota" v-model.number="form.nota" required>
          <option value="5">5 - Excelente</option>
          <option value="4">4 - Muito bom</option>
          <option value="3">3 - Regular</option>
          <option value="2">2 - Ruim</option>
          <option value="1">1 - Péssimo</option>
        </select>
      </div>

      <div class="campo">
        <label for="comentario">Comentário</label>
        <textarea
          id="comentario"
          v-model="form.comentario"
          rows="4"
          placeholder="Conte sua experiência com este profissional"
          required
        />
      </div>

      <div class="acoes-form">
        <button type="submit" class="btn btn-primary">
          {{ modoEdicao ? 'Salvar alterações' : 'Enviar avaliação' }}
        </button>

        <button v-if="modoEdicao" type="button" class="btn btn-secondary" @click="cancelarEdicao">
          Cancelar
        </button>
      </div>
    </form>

    <div class="lista">
      <p v-if="!reviews.length" class="sem-avaliacoes">
        Ainda não há avaliações para este profissional.
      </p>

      <div v-for="avaliacao in reviews" :key="avaliacao.id" class="avaliacao">
        <div class="topo">
          <strong>{{ avaliacao.author }}</strong>
          <span class="data">{{ avaliacao.date }}</span>
        </div>

        <p class="estrelas">{{ estrelasTexto(avaliacao.rating) }}</p>
        <p class="comentario">{{ avaliacao.comment }}</p>

        <div class="acoes-avaliacao">
          <button type="button" class="btn btn-link" @click="editarAvaliacao(avaliacao)">
            Editar
          </button>
          <button type="button" class="btn btn-link btn-danger" @click="excluirAvaliacao(avaliacao.id)">
            Excluir
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  profissional: { type: Object, required: true },
})

const form = ref({
  autor: '',
  nota: 5,
  comentario: '',
})

const modoEdicao = ref(false)
const avaliacaoEditandoId = ref(null)
const API_URL = 'http://localhost:3000'

const reviews = ref(Array.isArray(props.profissional?.reviews) ? [...props.profissional.reviews] : [])

watch(
  () => props.profissional?.reviews,
  (novasAvaliacoes) => {
    reviews.value = Array.isArray(novasAvaliacoes) ? [...novasAvaliacoes] : []
  },
  { immediate: true },
)

async function carregarAvaliacoes() {
  try {
    const resposta = await fetch(`${API_URL}/avaliacoes`)
    reviews.value = await resposta.json()
    atualizarResumo()
  } catch (error) {
    console.error('Erro ao carregar avaliações:', error)
  }
}

async function criarAvaliacao(dados) {
  const resposta = await fetch(`${API_URL}/avaliacoes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dados),
  })

  return await resposta.json()
}

async function atualizarAvaliacao(id, dadosAtualizados) {
  const resposta = await fetch(`${API_URL}/avaliacoes/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dadosAtualizados),
  })

  return await resposta.json()
}

async function excluirAvaliacaoPorId(id) {
  const resposta = await fetch(`${API_URL}/avaliacoes/${id}`, {
    method: 'DELETE',
  })

  return resposta
}

function atualizarResumo() {
  const total = reviews.value.length

  if (!total) {
    props.profissional.reviews = []
    props.profissional.reviewsCount = 0
    props.profissional.rating = 0
    return
  }

  const soma = reviews.value.reduce((totalParcial, avaliacao) => totalParcial + Number(avaliacao.rating || 0), 0)
  const media = soma / total

  props.profissional.reviews = [...reviews.value]
  props.profissional.reviewsCount = total
  props.profissional.rating = Number(media.toFixed(1))
}

function estrelasTexto(nota = 0) {
  const cheias = Math.round(nota)
  return '★'.repeat(cheias) + '☆'.repeat(5 - cheias)
}

const estrelas = computed(() => estrelasTexto(Number(props.profissional.rating || 0)))

function resetForm() {
  form.value = {
    autor: '',
    nota: 5,
    comentario: '',
  }
  modoEdicao.value = false
  avaliacaoEditandoId.value = null
}

async function salvarAvaliacao() {
  const autor = form.value.autor.trim()
  const comentario = form.value.comentario.trim()

  if (!autor || !comentario) {
    return
  }

  const dados = {
    author: autor,
    rating: Number(form.value.nota),
    comment: comentario,
    date: new Date().toISOString().slice(0, 10),
  }

  try {
    if (modoEdicao.value && avaliacaoEditandoId.value !== null) {
      await atualizarAvaliacao(avaliacaoEditandoId.value, dados)
    } else {
      await criarAvaliacao(dados)
    }

    await carregarAvaliacoes()
    resetForm()
  } catch (error) {
    console.error('Erro ao salvar avaliação:', error)
  }
}

function editarAvaliacao(avaliacao) {
  modoEdicao.value = true
  avaliacaoEditandoId.value = avaliacao.id
  form.value = {
    autor: avaliacao.author,
    nota: Number(avaliacao.rating),
    comentario: avaliacao.comment,
  }
}

function cancelarEdicao() {
  resetForm()
}

async function excluirAvaliacao(id) {
  const confirmarExclusao = window.confirm('Tem certeza que deseja excluir esta avaliação?')

  if (!confirmarExclusao) {
    return
  }

  try {
    await excluirAvaliacaoPorId(id)
    await carregarAvaliacoes()

    if (modoEdicao.value && avaliacaoEditandoId.value === id) {
      resetForm()
    }
  } catch (error) {
    console.error('Erro ao excluir avaliação:', error)
  }
}
</script>

<style scoped>
.resumo {
  background: #f5f5f5;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
}

.nota-media {
  font-size: 36px;
  margin: 0;
  color: #111827;
}

.estrelas {
  color: #f5b301;
  font-size: 20px;
  margin: 4px 0;
}

.total {
  color: #585d64;
}

.form-avaliacao {
  background: #f8fafc;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
  margin: 24px 0;
}

.form-avaliacao h3 {
  margin: 0 0 20px;
  font-size: 20px;
  color: #111827;
}

.campo {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
}

.campo label {
  font-weight: 600;
  color: #374151;
}

.campo input,
.campo select,
.campo textarea {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font: inherit;
}

.acoes-form {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  cursor: pointer;
  font-weight: 600;
}

.btn-primary {
  background: #2563eb;
  color: #fff;
}

.btn-secondary {
  background: #e5e7eb;
  color: #111827;
}

.btn-link {
  background: transparent;
  color: #2563eb;
  padding: 0;
}

.btn-danger {
  color: #dc2626;
}

.lista {
  margin-top: 20px;
}

.sem-avaliacoes {
  padding: 24px 0;
  text-align: center;
  color: #9ca3af;
}

.avaliacao {
  border-bottom: 1px solid #eee;
  padding: 16px 0;
}

.topo {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

.data {
  color: #82858c;
}

.comentario {
  color: #374151;
  margin: 10px 0;
}

.acoes-avaliacao {
  display: flex;
  gap: 16px;
  margin-top: 8px;
}
</style>