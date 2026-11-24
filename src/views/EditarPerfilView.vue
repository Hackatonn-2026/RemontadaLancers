
<template>
  <main>
    <div class="header">
      <div class="foto">
        <img src="/perfil.avif" alt="Foto de perfil">
      </div>
      <h1>Editar perfil</h1>
      <p>Atualize seus dados pessoais.</p>
    </div>

    <div class="informacao">
      <h3 class="informacao-titulo">
        Informações pessoais
      </h3>

      <form class="form" @submit.prevent="salvarAlteracoes">
        <Inputs v-model="nome" label="Nome" type="text" placeholder="Seu nome completo" />

        <Inputs v-model="email" label="E-mail" type="email" placeholder="Seu email" />

        <Inputs v-model="senha" label="Senha" type="password" placeholder="Digite sua senha" />

        <Inputs v-model="telefone" label="Telefone" type="tel" placeholder="Seu telefone" />

        <button type="submit" class="botao" :disabled="carregando">
          {{ carregando ? 'Salvando...' : 'Salvar alterações' }}
        </button>
      </form>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Inputs from '../components/Inputs.vue'
import {
  atualizarUsuario,
  buscarUsuarioPorId,
} from '@/data/usuarios'

const router = useRouter()

function carregarUsuario() {
  try {
    return JSON.parse(localStorage.getItem('usuario')) || {}
  } catch {
    return {}
  }
}

const usuario = carregarUsuario()

const nome = ref(usuario.nome || '')
const email = ref(usuario.email || '')
const senha = ref(usuario.senha || '')
const telefone = ref(usuario.telefone || '')
const carregando = ref(false)

async function salvarAlteracoes() {
  if (carregando.value) return

  if (!usuario.id) {
    alert('Não foi possível identificar o usuário. Faça login novamente.')
    return
  }

  carregando.value = true

  try {
    // GET por ID
    const dadosAtuais = await buscarUsuarioPorId(usuario.id)

    const usuarioAtualizado = {
      ...dadosAtuais,
      nome: nome.value,
      email: email.value,
      senha: senha.value,
      telefone: telefone.value,
    }

    // PUT
    const resultado = await atualizarUsuario(
      usuario.id,
      usuarioAtualizado,
    )

    localStorage.setItem('usuario', JSON.stringify(resultado))
    localStorage.setItem('contaSalva', JSON.stringify(resultado))

    window.dispatchEvent(new Event('auth-change'))

    alert('Perfil atualizado com sucesso!')

    await router.push('/perfil')
  } catch (erro) {
    console.error('Erro ao atualizar perfil:', erro)
    alert('Não foi possível salvar as alterações. Tente novamente.')
  } finally {
    carregando.value = false
  }
}
</script>

<style scoped>
main {
  width: min(100% - 32px, 900px);
  margin: 40px auto;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  text-align: center;
}

.header h1 {
  margin: 16px 0 4px;
  color: #172554;
}

.header p {
  color: #64748b;
}

.foto {
  width: 120px;
  height: 120px;
  overflow: hidden;
  border: 4px solid white;
  border-radius: 50%;
  box-shadow: 0 4px 14px rgb(15 23 42 / 12%);
}

.foto img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.informacao {
  border: 1px solid #d1d5db;
  border-radius: 15px;
  background: white;
}

.informacao-titulo {
  margin: 0;
  padding: 28px 32px 0;
  color: #172554;
  font-size: 20px;
  font-weight: 700;
}

.form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 28px;
  padding: 28px 32px 32px;
}

.botao {
  display: inline-block;
  grid-column: 1 / -1;
  justify-self: end;
  padding: 10px 18px;
  border: 0;
  border-radius: 6px;
  background-color: #2563eb;
  color: white;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
}

.botao:hover {
  background-color: #1d4ed8;
}

.botao:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@media (max-width: 640px) {
  main {
    width: min(100% - 20px, 900px);
    margin: 24px auto;
  }

  .informacao-titulo {
    padding: 22px 20px 0;
  }

  .form {
    grid-template-columns: 1fr;
    padding: 22px 20px 24px;
  }

  .botao {
    grid-column: auto;
    justify-self: stretch;
    text-align: center;
  }
}
</style>
