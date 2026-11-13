<template>
  <div class="avaliacoes-container">
    <div class="resumo">
      <h2 class="nota-media">{{ profissionalLocal.rating ?? 0 }}</h2>
      <p class="estrelas">{{ estrelas }}</p>
      <p class="total">
        {{ profissionalLocal.reviewsCount ?? 0 }}
        {{ profissionalLocal.reviewsCount === 1 ? 'avaliação' : 'avaliações' }}
      </p>
    </div>

    <form class="formulario" @submit.prevent="salvarAvaliacao">
      <h3>{{ editandoId ? 'Editar avaliação' : 'Nova avaliação' }}</h3>

      <label for="autor">Nome</label>
      <input id="autor" v-model="formulario.author" type="text" placeholder="Seu nome" required />

      <label for="nota">Nota</label>
      <select id="nota" v-model.number="formulario.rating" required>
        <option :value="5">5 - Ótimo</option>
        <option :value="4">4 - Bom</option>
        <option :value="3">3 - Médio</option>
        <option :value="2">2 - Ruim</option>
        <option :value="1">1 - Péssimo</option>
      </select>

      <label for="comentario">Mensagem</label>
      <textarea
        id="comentario"
        v-model="formulario.comment"
        rows="4"
        placeholder="Escreva sua opinião"
        required
      />

      <div class="botoes">
        <button type="button" class="botao secundario" @click="limparFormulario" v-if="editandoId">
          Cancelar
        </button>
        <button type="submit" class="botao">
          {{ editandoId ? 'Salvar' : 'Enviar' }}
        </button>
      </div>

      <p v-if="erro" class="erro" role="alert">{{ erro }}</p>
    </form>

    <div class="lista">
      <p v-if="!profissionalLocal.reviews?.length" class="sem-avaliacoes">
        Ainda não há avaliações.
      </p>

      <div v-for="avaliacao in profissionalLocal.reviews" :key="avaliacao.id" class="avaliacao">
        <div class="topo">
          <strong>{{ avaliacao.author }}</strong>
          <div class="acoes">
            <button type="button" class="botao-mini editar" @click="editarAvaliacao(avaliacao)">
              Editar
            </button>
            <button
              type="button"
              class="botao-mini excluir"
              @click="excluirAvaliacao(avaliacao.id)"
            >
              Excluir
            </button>
          </div>
        </div>
        <span class="data">{{ avaliacao.date }}</span>
        <p class="estrelas">{{ estrelasTexto(avaliacao.rating) }}</p>
        <p class="comentario">{{ avaliacao.comment }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'

const props = defineProps({
  profissional: { type: Object, required: true },
})

const emit = defineEmits(['atualizar-profissional'])
const API_URL = 'http://localhost:3000'

const profissionalLocal = ref({
  ...props.profissional,
  reviews: Array.isArray(props.profissional?.reviews) ? props.profissional.reviews : [],
})

const formulario = ref({
  author: '',
  rating: 5,
  comment: '',
})

const editandoId = ref(null)
const erro = ref('')

watch(
  () => props.profissional,
  (novoProfissional) => {
    profissionalLocal.value = {
      ...novoProfissional,
      reviews: Array.isArray(novoProfissional?.reviews) ? novoProfissional.reviews : [],
    }
  },
  { immediate: true, deep: true },
)

const estrelas = computed(() => estrelasTexto(profissionalLocal.value?.rating ?? 0))

function estrelasTexto(nota = 0) {
  const cheias = Math.round(nota)
  return '★'.repeat(cheias) + '☆'.repeat(5 - cheias)
}

function calcularMedia(reviews = []) {
  if (!reviews.length) return 0
  const total = reviews.reduce((soma, item) => soma + Number(item.rating || 0), 0)
  return Number((total / reviews.length).toFixed(1))
}

async function buscarProfissional() {
  const resposta = await fetch(`${API_URL}/profissionais/${props.profissional.id}`)

  if (!resposta.ok) {
    throw new Error('Erro ao carregar profissional')
  }

  const dados = await resposta.json()
  const reviews = Array.isArray(dados.reviews) ? dados.reviews : []

  profissionalLocal.value = {
    ...dados,
    reviews,
    rating: calcularMedia(reviews),
    reviewsCount: reviews.length,
  }

  emit('atualizar-profissional', profissionalLocal.value)
  return profissionalLocal.value
}

async function carregarAvaliacao() {
  try {
    await buscarProfissional()
    erro.value = ''
  } catch {
    erro.value = 'Não foi possível carregar as avaliações.'
  }
}

function limparFormulario() {
  formulario.value = {
    author: '',
    rating: 5,
    comment: '',
  }
  editandoId.value = null
}

function editarAvaliacao(avaliacao) {
  editandoId.value = avaliacao.id
  formulario.value = {
    author: avaliacao.author,
    rating: Number(avaliacao.rating),
    comment: avaliacao.comment,
  }
}

async function salvarAvaliacao() {
  if (!props.profissional?.id) return

  if (!formulario.value.author.trim() || !formulario.value.comment.trim()) {
    erro.value = 'Preencha nome e comentário.'
    return
  }

  try {
    const profissionalAtual = await buscarProfissional()
    const reviews = [...(profissionalAtual.reviews || [])]

    const novaAvaliacao = {
      id: editandoId.value ?? Date.now(),
      author: formulario.value.author.trim(),
      rating: Number(formulario.value.rating),
      comment: formulario.value.comment.trim(),
      date: new Date().toISOString().slice(0, 10),
    }

    const listaAtualizada = editandoId.value
      ? reviews.map((item) => (item.id === novaAvaliacao.id ? novaAvaliacao : item))
      : [...reviews, novaAvaliacao]

    const resposta = await fetch(`${API_URL}/profissionais/${props.profissional.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        reviews: listaAtualizada,
        reviewsCount: listaAtualizada.length,
        rating: calcularMedia(listaAtualizada),
      }),
    })

    if (!resposta.ok) {
      throw new Error('Erro ao salvar avaliação')
    }

    await buscarProfissional()
    limparFormulario()
    erro.value = ''
  } catch {
    erro.value = 'Não foi possível salvar a avaliação.'
  }
}

async function excluirAvaliacao(id) {
  if (!props.profissional?.id) return
  const confirmar = window.confirm('Deseja realmente excluir esta avaliação?')

  if (!confirmar) return

  try {
    const profissionalAtual = await buscarProfissional()
    const reviews = (profissionalAtual.reviews || []).filter((item) => item.id !== id)

    const resposta = await fetch(`${API_URL}/profissionais/${props.profissional.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        reviews,
        reviewsCount: reviews.length,
        rating: calcularMedia(reviews),
      }),
    })

    if (!resposta.ok) {
      throw new Error('Erro ao excluir avaliação')
    }

    await buscarProfissional()
    erro.value = ''
  } catch {
    erro.value = 'Não foi possível excluir a avaliação.'
  }
}

onMounted(carregarAvaliacao)
</script>

<style scoped>
.avaliacoes-container {
  display: grid;
  gap: 24px;
}

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

.formulario {
  display: grid;
  gap: 10px;
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #fff;
}

.formulario h3 {
  margin: 0 0 8px;
  color: #111827;
}

.formulario label {
  font-weight: 700;
  color: #374151;
}

.formulario input,
.formulario select,
.formulario textarea {
  width: 100%;
  box-sizing: border-box;
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font: inherit;
}

.formulario textarea {
  resize: vertical;
  min-height: 100px;
}

.botoes {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 8px;
}

.botao {
  border: 0;
  border-radius: 8px;
  background: #2563eb;
  color: #fff;
  font: inherit;
  font-weight: 600;
  padding: 10px 16px;
  cursor: pointer;
}

.botao.secundario {
  background: #e5e7eb;
  color: #111827;
}

.botao-mini {
  border: 0;
  border-radius: 6px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 12px;
}

.botao-mini.editar {
  background: #eff6ff;
  color: #1d4ed8;
}

.botao-mini.excluir {
  background: #fef2f2;
  color: #b91c1c;
}

.erro {
  margin: 0;
  color: #b91c1c;
}

.lista {
  margin-top: 8px;
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
  align-items: center;
  gap: 12px;
}

.acoes {
  display: flex;
  gap: 8px;
}

.data {
  display: inline-block;
  margin-top: 6px;
  color: #82858c;
}

.comentario {
  color: #374151;
  margin-top: 8px;
}
</style>
