<template>
  <main class="pagina-usuarios">
    <header class="cabecalho">
      <p class="destaque">Gerenciamento</p>
      <h1>Usuários cadastrados</h1>
      <p>Consulte os usuários registrados na API do projeto.</p>

      <button
        class="botao-atualizar"
        type="button"
        :disabled="carregando"
        @click="carregarUsuarios"
      >
        {{ carregando ? 'Carregando...' : 'Atualizar lista' }}
      </button>
    </header>

    <p v-if="erro" class="mensagem erro">{{ erro }}</p>
    <p v-else-if="carregando" class="mensagem">
      Carregando usuários...
    </p>
    <p v-else-if="usuarios.length === 0" class="mensagem">
      Nenhum usuário cadastrado.
    </p>

    <section v-else class="lista-usuarios">
      <article
        v-for="usuario in usuarios"
        :key="usuario.id"
        class="usuario-card"
      >
        <div>
          <h2>{{ usuario.nome }}</h2>
          <p>{{ usuario.email }}</p>
          <span class="tipo">
            {{ usuario.tipoUsuario || usuario.tipo || 'Tipo não informado' }}
          </span>
        </div>

        <button
          type="button"
          class="botao-detalhes"
          @click="verDetalhes(usuario.id)"
        >
          Ver detalhes
        </button>
      </article>
    </section>

    <section v-if="usuarioSelecionado" class="detalhes">
      <h2>Detalhes do usuário</h2>
      <p><strong>ID:</strong> {{ usuarioSelecionado.id }}</p>
      <p><strong>Nome:</strong> {{ usuarioSelecionado.nome }}</p>
      <p><strong>E-mail:</strong> {{ usuarioSelecionado.email }}</p>
      <p>
        <strong>Telefone:</strong>
        {{ usuarioSelecionado.telefone || 'Não informado' }}
      </p>
      <p>
        <strong>Tipo:</strong>
        {{ usuarioSelecionado.tipoUsuario || usuarioSelecionado.tipo || 'Não informado' }}
      </p>
      <p v-if="usuarioSelecionado.profissao">
        <strong>Profissão:</strong> {{ usuarioSelecionado.profissao }}
      </p>

      <button
        type="button"
        class="botao-fechar"
        @click="usuarioSelecionado = null"
      >
        Fechar detalhes
      </button>
    </section>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import {
  obterUsuariosCadastrados,
  buscarUsuarioPorId,
} from '@/data/usuarios'

const usuarios = ref([])
const usuarioSelecionado = ref(null)
const carregando = ref(false)
const erro = ref('')

async function carregarUsuarios() {
  carregando.value = true
  erro.value = ''
  usuarioSelecionado.value = null

  try {
    usuarios.value = await obterUsuariosCadastrados()
  } catch (error) {
    console.error('Erro ao listar usuários:', error)
    erro.value =
      'Não foi possível carregar os usuários. Verifique se a API está funcionando.'
  } finally {
    carregando.value = false
  }
}

async function verDetalhes(id) {
  try {
    usuarioSelecionado.value = await buscarUsuarioPorId(id)
  } catch (error) {
    console.error('Erro ao consultar usuário:', error)
    alert('Não foi possível consultar os dados deste usuário.')
  }
}

onMounted(carregarUsuarios)
</script>

<style scoped>
.pagina-usuarios {
  width: min(100% - 32px, 900px);
  margin: 40px auto;
  color: #172554;
}

.cabecalho {
  margin-bottom: 24px;
  text-align: center;
}

.destaque {
  color: #2563eb;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
}

.cabecalho h1 {
  margin: 8px 0;
}

.cabecalho p {
  color: #64748b;
}

.botao-atualizar,
.botao-detalhes,
.botao-fechar {
  border: 0;
  border-radius: 7px;
  padding: 10px 16px;
  background: #2563eb;
  color: white;
  cursor: pointer;
}

.botao-atualizar:disabled {
  opacity: .6;
  cursor: wait;
}

.lista-usuarios {
  display: grid;
  gap: 12px;
}

.usuario-card,
.detalhes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background: white;
}

.usuario-card h2,
.detalhes h2 {
  margin: 0 0 6px;
  font-size: 18px;
}

.usuario-card p {
  margin: 0 0 8px;
  color: #64748b;
}

.tipo {
  display: inline-block;
  padding: 4px 9px;
  border-radius: 20px;
  background: #dbeafe;
  color: #1d4ed8;
  font-size: 12px;
}

.detalhes {
  display: block;
  margin-top: 24px;
}

.detalhes p {
  color: #475569;
}

.mensagem {
  text-align: center;
  color: #64748b;
}

.erro {
  color: #b91c1c;
}

@media (max-width: 600px) {
  .pagina-usuarios {
    width: min(100% - 20px, 900px);
  }

  .usuario-card {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>