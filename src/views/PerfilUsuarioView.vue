<template>
  <main class="perfil">
    <section class="perfil-header">
      <div class="foto">
        <img src="/perfil.avif" alt="Foto de perfil" />
      </div>

      <div class="dados-principais">
        <h1>{{ usuario.nome }}</h1>
        <p>{{ usuario.email }}</p>
        <div class="acoes-perfil">
          <RouterLink to="/editar-perfil" class="botao"> Editar perfil </RouterLink>
          <button class="botao" @click="sair">Sair</button>
        </div>
      </div>
    </section>

    <section class="card">
      <h2>Informações</h2>

      <div class="informacoes">
        <div>
          <strong>E-mail</strong>
          <p>{{ usuario.email }}</p>
        </div>

        <div>
          <strong>Telefone</strong>
          <p>{{ usuario.telefone || 'Não informado' }}</p>
        </div>
      </div>
    </section>

    <section class="card" v-if="solicitacoesRecebidas.length">
      <div class="titulo-servicos">
        <h2>Serviços contratados</h2>
      </div>

      <p v-if="!usuario.servicos.length">Ainda não há serviços contratados.</p>
      <ul v-else class="lista-servicos">
        <li v-for="servico in usuario.servicos" :key="servico.id || servico.nome || servico">
          {{ servico.nome || servico }}
        </li>
      </ul>
    </section>

    <section class="card">
      <h2>Serviços solicitados</h2>

      <p v-if="solicitacoesCliente.length === 0" class="lista-vazia">
        Ainda não há nenhum serviço solicitado.
      </p>

      <div v-else class="lista-status-usuario">
        <article
          v-for="solicitacao in solicitacoesCliente"
          :key="solicitacao.id"
          class="pedido-status-item"
        >
          <div class="pedido-topo">
            <h3>{{ solicitacao.servicoTitulo }}</h3>
            <span class="pedido-status" :class="statusClass(solicitacao.status)">
              {{ statusTexto(solicitacao.status) }}
            </span>
          </div>

          <p class="descricao-status">
            {{ descricaoStatus(solicitacao.status) }}
          </p>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { obterSolicitacoesPorCliente } from '@/data/solicitacoes'

const router = useRouter()

function carregarUsuario() {
  return JSON.parse(localStorage.getItem('usuario') || '{}')
}

const dadosUsuario = carregarUsuario()
const usuario = {
  ...dadosUsuario,
  servicos: Array.isArray(dadosUsuario.servicos) ? dadosUsuario.servicos : [],
  pedidosOrcamento: dadosUsuario.pedidosOrcamento || [],
}
const solicitacoesRecebidas = Array.isArray(usuario.servicos) ? usuario.servicos : []
const solicitacoesCliente = ref([])

function carregarSolicitacoes() {
  solicitacoesCliente.value = obterSolicitacoesPorCliente(usuario.id)
}

onMounted(() => {
  carregarSolicitacoes()
  window.addEventListener('solicitacoes-atualizadas', carregarSolicitacoes)
})

onBeforeUnmount(() => {
  window.removeEventListener('solicitacoes-atualizadas', carregarSolicitacoes)
})

function statusTexto(status) {
  if (status === 'pendente') return 'Serviço aceito'
  if (status === 'aceita') return 'Serviço aceito'
  return 'Sem status'
}

function descricaoStatus(status) {
  if (status === 'pendente') return 'Serviço aceito.'
  if (status === 'aceita') return 'Serviço aceito.'
  return 'Status ainda não informado.'
}

function statusClass(status) {
  if (status === 'pendente') return 'pendente'
  if (status === 'aceita') return 'aceita'
  return ''
}

function sair() {
  const usuarioAtual = carregarUsuario()
  localStorage.setItem('contaSalva', JSON.stringify(usuarioAtual))
  localStorage.removeItem('usuario')
  window.dispatchEvent(new Event('auth-change'))
  router.push('/login')
}
</script>

<style scoped>
.perfil {
  width: min(100% - 32px, 900px);
  margin: 40px auto;
  padding: 0;
}
.perfil-header {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 28px 32px;
  background: #eef5ff;
  border-radius: 15px;
  margin-bottom: 24px;
}
.foto {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 4px solid white;
  box-shadow: 0 4px 14px rgb(15 23 42 / 12%);
}
.dados-principais {
  flex: 1;
}
.dados-principais h1 {
  margin: 0 0 8px;
  color: #172554;
  font-size: 28px;
  font-weight: 700;
}
.dados-principais p {
  margin: 0 0 16px;
  color: #64748b;
}
.card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 15px;
  padding: 28px 32px;
  margin-bottom: 24px;
}
.card h2 {
  margin: 0 0 20px;
  color: #172554;
  font-size: 20px;
  font-weight: 700;
}
.card p {
  margin: 5px 0 0;
  color: #64748b;
}
.informacoes {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
.informacoes strong {
  color: #172554;
  font-size: 14px;
}
.titulo-servicos {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.foto img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.botao {
  display: inline-block;
  padding: 10px 18px;
  border: 0;
  border-radius: 6px;
  background: #2563eb;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  margin-right: 8px;
}
.botao:hover {
  background: #1d4ed8;
}
.lista-servicos {
  margin: 0;
  padding-left: 20px;
  color: #64748b;
}
.lista-servicos li + li {
  margin-top: 8px;
}

.lista-servicos li {
  display: grid;
  gap: 4px;
}

.lista-servicos span {
  color: #64748b;
}

.texto-ajuda,
.lista-vazia {
  margin-bottom: 20px;
}

.lista-status-usuario {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.pedido-status-item {
  border: 1px solid #d1d5db;
  border-radius: 10px;
  background: #ffffff;
  padding: 16px;
}

.pedido-status-item .pedido-topo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.pedido-status-item h3 {
  margin: 0;
  color: #111827;
  font-size: 18px;
}

.descricao-status {
  margin: 0;
  color: #4b5563;
  font-size: 14px;
  line-height: 1.5;
}

.pedido-status {
  display: inline-block;
  padding: 6px 10px;
  border-radius: 0;
  font-size: 12px;
  font-weight: 700;
  color: #ffffff;
  background: #2563eb;
}

.pedido-status.pendente {
  background: #2563eb;
}

.pedido-status.aceita {
  background: #2563eb;
}

.lista-pedidos {
  display: grid;
  gap: 12px;
}

.pedido {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  border: 1px solid #dbe5f4;
  border-radius: 10px;
  background: #f8fbff;
}

.pedido-check {
  display: grid;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  place-items: center;
  border-radius: 50%;
  background: #dbeafe;
  color: #2563eb;
  font-weight: 700;
}

.pedido-conteudo {
  min-width: 0;
  flex: 1;
}

.pedido-topo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.pedido h3 {
  margin: 0;
  color: #172554;
  font-size: 16px;
}

.pedido p {
  margin: 8px 0;
  line-height: 1.5;
}

.pedido small {
  color: #64748b;
}

.pedido-status {
  padding: 4px 8px;
  border-radius: 0;
  background: #2563eb;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
}

@media (max-width: 640px) {
  .perfil {
    width: min(100% - 20px, 900px);
    margin: 24px auto;
  }

  .perfil-header {
    align-items: flex-start;
    flex-direction: column;
    padding: 24px 20px;
  }

  .dados-principais {
    width: 100%;
  }

  .informacoes {
    grid-template-columns: 1fr;
  }

  .card {
    padding: 24px 20px;
  }

  .botao {
    margin-bottom: 8px;
  }

  .pedido-topo {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }
}
</style>
