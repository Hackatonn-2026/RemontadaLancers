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
      <form class="form">
      <Inputs v-model="nome" label="Nome" type="text" placeholder="Seu nome completo" />
      <Inputs v-model="email" label="E-mail" type="email" placeholder="seuemail@exemplo.com" />
      <Inputs v-model="senha" label="Senha" type="text" placeholder="Digite sua senha" />
      <Inputs v-model="telefone" label="Telefone" type="tel" placeholder="Seu telefone" />
      <RouterLink to="/perfil" class="botao" @click="salvarAlteracoes">
        Salvar alterações
      </RouterLink>
      </form>
    </div>
  </main>
</template>
<script setup>
import { ref } from 'vue'
import Inputs from '../components/Inputs.vue'

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

function salvarAlteracoes() {
  const usuarioAtualizado = {
    ...usuario,
    nome: nome.value,
    email: email.value,
    senha: senha.value,
    telefone: telefone.value
  }

  localStorage.setItem('usuario', JSON.stringify(usuarioAtualizado))
  localStorage.setItem('contaSalva', JSON.stringify(usuarioAtualizado))
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