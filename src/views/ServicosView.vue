<script setup>
import { computed, onMounted, ref } from 'vue'
import FiltroSidebar from '@/components/FiltroSidebar.vue'
import BaseButton from '@/components/Button.vue'
import { obterServicos } from '@/data/servicos'
import { obterUsuarios } from '@/data/usuarios'
import { criarSolicitacao } from '@/data/solicitacoes'

const filtrosAtuais = ref({ precos: [], regioes: [] })
const carregando = ref(true)
const erro = ref('')
const servicos = ref([])

const usuarioAtual = JSON.parse(localStorage.getItem('usuario'))
const usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || []
const usuarioEhFreelancer =
  usuarioAtual && (usuarioAtual.tipoUsuario || usuarioAtual.tipo) === 'freelancer'
const destinoCadastroServico = usuarioAtual ? '/cadastro-servico' : '/login'

async function carregarServicos() {
  carregando.value = true
  erro.value = ''

  try {
    const dados = await obterServicos()
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

onMounted(() => {
  carregarServicos()
})
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
          <span class="categoria cat">
            {{ servico.categoria }}
          </span>

          <h2>{{ servico.titulo }}</h2>

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

          <!-- direcionar ao login (usuario cliene) -->bot
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
