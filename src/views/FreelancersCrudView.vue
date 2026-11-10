<script setup>
import { onMounted, ref } from 'vue'

const API_URL = 'http://localhost:3000'

const categorias = [
  'Aulas',
  'Consultoria',
  'Desenvolvimento',
  'Design',
  'Edição de Vídeo',
  'Elétrica',
  'Fotografia',
  'Informática',
  'Jardinagem',
  'Limpeza',
  'Marketing & Redes Sociais',
  'Mecânica',
  'Música',
  'Pintura',
  'Redação',
  'Tradução & Idiomas',
]

const freelancers = ref([])
const mostrandoFormulario = ref(false)
const editandoId = ref(null)
const erro = ref('')

const formulario = ref({
  nome: '',
  profissao: '',
  categoria: '',
  descricao: '',
  precoHora: '',
})

async function carregarFreelancers() {
  try {
    const resposta = await fetch(`${API_URL}/profissionais`)
    freelancers.value = await resposta.json()
    erro.value = ''
  } catch {
    erro.value = 'Não foi possível carregar os freelancers. Verifique se a API está ligada.'
  }
}

function limparFormulario() {
  formulario.value = {
    nome: '',
    profissao: '',
    categoria: '',
    descricao: '',
    precoHora: '',
  }
  editandoId.value = null
  mostrandoFormulario.value = false
}

function novoFreelancer() {
  limparFormulario()
  mostrandoFormulario.value = true
}

function editarFreelancer(freelancer) {
  formulario.value = {
    nome: freelancer.nome,
    profissao: freelancer.profissao,
    categoria: freelancer.categoria,
    descricao: freelancer.descricao,
    precoHora: freelancer.precoHora,
  }
  editandoId.value = freelancer.id
  mostrandoFormulario.value = true
}

async function salvarFreelancer() {
  const dados = {
    ...formulario.value,
    precoHora: Number(formulario.value.precoHora),
  }

  let url = `${API_URL}/profissionais`
  let metodo = 'POST'

  if (editandoId.value) {
    url = `${API_URL}/profissionais/${editandoId.value}`
    metodo = 'PATCH'
  } else {
    dados.rating = 0
    dados.reviewsCount = 0
    dados.reviews = []
  }

  try {
    const resposta = await fetch(url, {
      method: metodo,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados),
    })

    if (!resposta.ok) {
      throw new Error('Erro ao salvar')
    }

    limparFormulario()
    await carregarFreelancers()
  } catch {
    erro.value = 'Não foi possível salvar o freelancer.'
  }
}

async function excluirFreelancer(id) {
  const confirmarExclusao = window.confirm('Deseja realmente excluir esse freelancer?')

  if (confirmarExclusao) {
    await fetch(`${API_URL}/profissionais/${id}`, {
      method: 'DELETE',
    })

    await carregarFreelancers()
  }
}

onMounted(carregarFreelancers)
</script>

<template>
  <section class="bloco">
    <header class="topo">
      <div>
        <h2>Freelancers</h2>
        <p>Freelancers cadastrados no sistema.</p>
      </div>
      <button v-if="!mostrandoFormulario" type="button" class="botao" @click="novoFreelancer">
        Adicionar freelancer
      </button>
    </header>

    <p v-if="erro" class="erro" role="alert">{{ erro }}</p>

    <form v-if="mostrandoFormulario" class="formulario" @submit.prevent="salvarFreelancer">
      <h3>{{ editandoId ? 'Editar freelancer' : 'Novo freelancer' }}</h3>

      <label for="nome">Nome</label>
      <input id="nome" v-model="formulario.nome" type="text" required />

      <label for="profissao">Profissão</label>
      <input id="profissao" v-model="formulario.profissao" type="text" required />

      <label for="categoria">Categoria</label>
      <select id="categoria" v-model="formulario.categoria" required>
        <option value="" disabled>Selecione a categoria</option>
        <option v-for="categoria in categorias" :key="categoria" :value="categoria">
          {{ categoria }}
        </option>
      </select>

      <label for="precoHora">Preço por hora (R$)</label>
      <input id="precoHora" v-model="formulario.precoHora" type="number" min="0" required />

      <label for="descricao">Descrição</label>
      <textarea id="descricao" v-model="formulario.descricao" rows="4" required></textarea>

      <div class="botoes">
        <button type="button" class="botao secundario" @click="limparFormulario">Cancelar</button>
        <button type="submit" class="botao">Salvar</button>
      </div>
    </form>

    <table class="tabela">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Profissão</th>
          <th>Categoria</th>
          <th>Preço/hora</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="freelancer in freelancers" :key="freelancer.id">
          <td>{{ freelancer.id }}</td>
          <td>{{ freelancer.nome }}</td>
          <td>{{ freelancer.profissao }}</td>
          <td>{{ freelancer.categoria }}</td>
          <td>R$ {{ freelancer.precoHora }}</td>
          <td class="acoes">
            <button type="button" class="editar" @click="editarFreelancer(freelancer)">
              Editar
            </button>
            <button type="button" class="excluir" @click="excluirFreelancer(freelancer.id)">
              Excluir
            </button>
          </td>
        </tr>
        <tr v-if="freelancers.length === 0">
          <td colspan="6" class="vazio">Nenhum freelancer cadastrado.</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
.bloco {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px 60px;
}

.topo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
}

.topo h2 {
  margin: 0;
  color: #111827;
}

.topo p {
  margin: 4px 0 0;
  color: #6b7280;
}

.erro {
  margin: 0 0 16px;
  color: #b91c1c;
}

.formulario {
  display: grid;
  gap: 10px;
  max-width: 520px;
  margin-bottom: 28px;
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #fff;
}

.formulario h3 {
  margin: 0 0 6px;
  color: #172554;
}

.formulario label {
  font-weight: 700;
  font-size: 14px;
}

.formulario input,
.formulario select,
.formulario textarea {
  box-sizing: border-box;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background: #fff;
  font: inherit;
}

.botoes {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 8px;
}

.botao {
  padding: 10px 18px;
  border: 0;
  border-radius: 8px;
  background: #2563eb;
  color: #fff;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
}

.botao:hover {
  background: #1d4ed8;
}

.botao.secundario {
  background: #fff;
  border: 1px solid #d1d5db;
  color: #1f2937;
}

.tabela {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border: 1px solid #e5e7eb;
}

.tabela th,
.tabela td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #e5e7eb;
}

.tabela th {
  background: #f8fafc;
  color: #172554;
  font-size: 14px;
}

.tabela tbody tr:hover {
  background: #f8fafc;
}

.acoes {
  display: flex;
  gap: 8px;
}

.acoes button {
  padding: 6px 10px;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
}

.editar {
  background: #eff6ff;
  color: #1d4ed8;
}

.excluir {
  background: #fef2f2;
  color: #b91c1c;
}

.vazio {
  text-align: center;
  color: #6b7280;
}

@media (max-width: 700px) {
  .topo {
    flex-direction: column;
    align-items: flex-start;
  }

  .tabela {
    display: block;
    overflow-x: auto;
  }
}
</style>