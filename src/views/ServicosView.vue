<script setup>
import { computed, onMounted, ref } from 'vue'
import FiltroSidebar from '@/components/FiltroSidebar.vue'
import BaseButton from '@/components/Button.vue'
import { obterUsuarios } from '@/data/usuarios'
import { criarSolicitacao, obterSolicitacoes } from '@/data/solicitacoes'

const API_URL = import.meta.env.DEV
  ? 'http://localhost:3000'
  : 'https://remontadalancers.onrender.com'

const filtrosAtuais = ref({ precos: [], regioes: [] })
const carregando = ref(true)
const erro = ref('')
const servicos = ref([])
const servicoEmEdicao = ref(null)

const usuarioAtual = JSON.parse(localStorage.getItem('usuario'))
const usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || []
const usuarioEhFreelancer =
  usuarioAtual && (usuarioAtual.tipoUsuario || usuarioAtual.tipo) === 'freelancer'
const destinoCadastroServico = usuarioAtual ? '/cadastro-servico' : '/login'

async function carregarServicos() {
  carregando.value = true
  erro.value = ''

  try {
    const resposta = await fetch(`${API_URL}/servicos`)

    if (!resposta.ok) {
      throw new Error('Não foi possível carregar os serviços.')
    }

    const dados = await resposta.json()
    const usuarios = obterUsuarios(usuariosCadastrados)

    if (usuarioAtual && !usuarios.some((usuario) => usuario.email === usuarioAtual.email)) {
      usuarios.push(usuarioAtual)
    }

    servicos.value = dados.map((servico) => ({
      ...servico,
      usuario:
        usuarios.find((usuario) => usuario.id === servico.usuarioId) ||
        (usuarios.length === 1 ? usuarios[0] : null),
    }))
  } catch (err) {
    erro.value = 'Não foi possível carregar os serviços.'
    console.error(err)
  } finally {
    carregando.value = false
  }
}

const servicosFiltrados = computed(() => {
  return servicos.value.filter((servico) => {
    const filtroDePreco = filtrosAtuais.value.precos
    const filtroDeRegiao = filtrosAtuais.value.regioes
    const passouNoPreco =
      filtroDePreco.length === 0 ||
      filtroDePreco.some((opcao) => servico.preco >= opcao.min && servico.preco <= opcao.max)
    const passouNaRegiao =
      filtroDeRegiao.length === 0 || filtroDeRegiao.includes(servico.localizacao)

    return passouNoPreco && passouNaRegiao
  })
})

function atualizarFiltros(novosFiltros) {
  filtrosAtuais.value = novosFiltros
}

function editarServico(servico) {
  servicoEmEdicao.value = { ...servico }
}

async function salvarEdicao() {
  if (!servicoEmEdicao.value.titulo.trim() || !servicoEmEdicao.value.descricao.trim()) {
    alert('Preencha o título e a descrição do serviço.')
    return
  }

  if (!Number.isFinite(Number(servicoEmEdicao.value.preco)) || servicoEmEdicao.value.preco < 0) {
    alert('Informe um orçamento válido.')
    return
  }

  try {
    const dadosServico = { ...servicoEmEdicao.value }
    dadosServico.orcamento = `R$ ${Number(dadosServico.preco).toFixed(2).replace('.', ',')}`
    const resposta = await fetch(`${API_URL}/servicos/${dadosServico.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        titulo: dadosServico.titulo,
        categoria: dadosServico.categoria,
        descricao: dadosServico.descricao,
        localizacao: dadosServico.localizacao,
        preco: dadosServico.preco,
        orcamento: dadosServico.orcamento,
      }),
    })

    if (!resposta.ok) {
      throw new Error('Não foi possível atualizar o serviço.')
    }

    servicoEmEdicao.value = null
    await carregarServicos()
    alert('Serviço atualizado com sucesso.')
  } catch (err) {
    console.error(err)
    alert('Não foi possível atualizar o serviço. Tente novamente.')
  }
}

async function removerServico(servico) {
  const solicitacoes = obterSolicitacoes()
  const temSolicitacoes = solicitacoes.some(
    (solicitacao) => String(solicitacao.servicoId) === String(servico.id),
  )

  if (temSolicitacoes) {
    alert('Este serviço tem solicitações vinculadas e não pode ser excluído.')
    return
  }

  if (!confirm('Tem certeza que deseja excluir este serviço?')) {
    return
  }

  try {
    const resposta = await fetch(`${API_URL}/servicos/${servico.id}`, {
      method: 'DELETE',
    })

    if (!resposta.ok) {
      throw new Error('Não foi possível excluir o serviço.')
    }

    await carregarServicos()
    alert('Serviço excluído com sucesso.')
  } catch (err) {
    console.error(err)
    alert('Não foi possível excluir o serviço. Tente novamente.')
  }
}

function servicoEhDoUsuario(servico) {
  return usuarioAtual && String(servico.usuarioId) === String(usuarioAtual.id)
}

function solicitarServico(servico) {
  const cliente = servico.usuario || {
    id: servico.usuarioId,
    nome: 'Cliente da plataforma',
  }

  const solicitacao = criarSolicitacao({
    servico,
    cliente: usuarioEhFreelancer ? cliente : usuarioAtual,
    freelancer: usuarioEhFreelancer ? usuarioAtual : cliente,
  })

  if (!solicitacao) {
    alert('Você já solicitou este serviço.')
    return
  }

  const mensagem = usuarioEhFreelancer
    ? 'Solicitação registrada no seu perfil de freelancer.'
    : 'Solicitação enviada para o cliente.'

  alert(mensagem)
}

onMounted(carregarServicos)
</script>

<template>
  <main class="servicos-page">
    <section class="cabecalho">
      <p class="destaque">serviços disponíveis</p>

      <h1>Pedidos de serviço</h1>

      <p>
        Confira os pedidos feitos pelos nossos usuários e encontre um serviço que combine com suas
        habilidades.
      </p>
    </section>

    <section class="conteudo">
      <FiltroSidebar @filtrar="atualizarFiltros" />

      <section class="lista-servicos">
        <p v-if="carregando" class="estado-servicos">Carregando serviços...</p>

        <p v-else-if="erro" class="estado-servicos erro">{{ erro }}</p>

        <div v-else-if="servicosFiltrados.length === 0" class="estado-servicos">
          Nenhum serviço encontrado com esses filtros.
        </div>

        <div v-for="servico in servicosFiltrados" :key="servico.id" class="servico-card">
          <form
            v-if="servicoEmEdicao?.id === servico.id"
            class="form-edicao"
            @submit.prevent="salvarEdicao"
          >
            <label>Título</label>
            <input v-model="servicoEmEdicao.titulo" class="campo-edicao" required />

            <label>Categoria</label>
            <input v-model="servicoEmEdicao.categoria" class="campo-edicao" required />

            <label>Descrição</label>
            <textarea v-model="servicoEmEdicao.descricao" class="campo-edicao" required></textarea>

            <label>Localização</label>
            <input v-model="servicoEmEdicao.localizacao" class="campo-edicao" required />

            <label>Orçamento (R$)</label>
            <input
              v-model.number="servicoEmEdicao.preco"
              class="campo-edicao"
              type="number"
              min="0"
              required
            />

            <div class="acoes-servico">
              <BaseButton type="submit">Salvar</BaseButton>
              <BaseButton variant="secondary" @click="servicoEmEdicao = null">Cancelar</BaseButton>
            </div>
          </form>

          <template v-else>
            <span class="categoria cat">
              {{ servico.categoria }}
            </span>

            <h2>{{ servico.titulo }}</h2>

            <BaseButton :to="`/servicos/${servico.id}`" variant="secondary">
              Ver detalhes
            </BaseButton>

            <p class="descricao">
              {{ servico.descricao }}
            </p>

            <p>
              <strong class="loc">Localização:</strong>
              {{ servico.localizacao }}
            </p>

            <p>
              <strong class="orc">Orçamento:</strong>
              {{ servico.orcamento }}
            </p>

            <div class="publicado-por">
              <span class="circulo-foto">
                {{ servico.usuario?.nome?.charAt(0) || '?' }}
              </span>
              <span>Publicado por {{ servico.usuario?.nome || 'Usuário da plataforma' }}</span>
            </div>

            <BaseButton v-if="!usuarioAtual" to="/login" class="botao-solicitar">
              Solicitar serviço
            </BaseButton>

            <BaseButton
              v-else-if="usuarioEhFreelancer"
              class="botao-solicitar"
              @click="solicitarServico(servico)"
            >
              Solicitar serviço
            </BaseButton>
            <div v-if="servicoEhDoUsuario(servico)" class="acoes-servico">
              <BaseButton variant="secondary" @click="editarServico(servico)">Editar</BaseButton>
              <BaseButton variant="secondary" @click="removerServico(servico)">Excluir</BaseButton>
            </div>
          </template>
        </div>
      </section>
    </section>

    <BaseButton v-if="!usuarioEhFreelancer" :to="destinoCadastroServico" class="botao-flutuante">
      + Cadastrar Serviço
    </BaseButton>
  </main>
</template>

<style scoped>
.servicos-page {
  min-height: 100vh;
  padding: 45px 7%;
  background: #fff;
}

.cabecalho {
  margin-bottom: 35px;
  text-align: center;
}

.destaque {
  margin: 0 0 8px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.cabecalho .destaque {
  color: #2563eb;
}

.cabecalho h1 {
  margin-bottom: 10px;
  color: black;
  font-size: 34px;
}

.cabecalho p {
  max-width: 800px;
  margin: 0 auto;
  color: #555;
  font-size: 16px;
  text-align: center;
}

.conteudo {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 30px;
  align-items: start;
}

.lista-servicos {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 25px;
}

.estado-servicos {
  grid-column: 1 / -1;
  color: #555;
  font-weight: 600;
}

.estado-servicos.erro {
  color: #b91c1c;
}

.servico-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  border: 1px solid #e1e1e1;
  border-radius: 12px;
  background: white;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
}

.form-edicao {
  display: grid;
  width: 100%;
  gap: 8px;
}

.campo-edicao {
  box-sizing: border-box;
  width: 100%;
  padding: 9px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font: inherit;
}

.form-edicao textarea {
  min-height: 90px;
}

.acoes-servico {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 12px;
}

.categoria {
  color: #2349a5;
  font-size: 13px;
  font-weight: bold;
}

.servico-card h2 {
  margin: 10px 0;
  color: black;
  font-size: 21px;
}

.descricao {
  min-height: 48px;
  color: #555;
}

.servico-card p {
  color: #444;
  font-size: 14px;
  text-align: center;
}

.botao-solicitar {
  margin-top: 24px;
}

.publicado-por {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  color: #555;
  font-size: 14px;
}

.circulo-foto {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #2563eb;
  color: white;
  font-weight: bold;
}

.cat,
.orc,
.loc {
  font-weight: bold;
}

.botao-flutuante {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>
