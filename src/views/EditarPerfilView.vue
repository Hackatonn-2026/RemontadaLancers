<template>
  <main>
    <RouterLink to="/perfil" class="voltar">
      Voltar para o perfil
    </RouterLink>
    <div class="header">
      <div class="foto">
        <img src="/perfil.avif" alt="Foto de perfil">
      </div>
      <h1>Editar Perfil</h1>
      <p>Atualize suas informações pessoais</p>
    </div>
    <div class="informacao">
      <h3 class="informacao-titulo">
        Informações pessoais
      </h3>
      <form>
        <Inputs v-model="nome" label="Nome" type="text" placeholder="Seu nome completo" />
        <Inputs v-model="email" label="E-mail" type="email" placeholder="seuemail@exemplo.com" />
        <Inputs v-model="senha" label="Senha" type="password" placeholder="Digite sua senha" />
        <Inputs v-model="telefone" label="Telefone" type="tel" placeholder="Seu telefone" />
        <RouterLink to="/perfil" class="botao-salvar" @click="salvarAlteracoes">
          Salvar Alterações
        </RouterLink>
      </form>
    </div>
  </main>
</template>
<script setup>
import { ref } from 'vue'
import Inputs from '../components/Inputs.vue'
const usuario = JSON.parse(localStorage.getItem('usuario'));
const nome = ref(usuario.nome);
const email = ref(usuario.email);
const senha = ref(usuario.senha);
const telefone = ref(usuario.telefone);
function salvarAlteracoes() {
  const usuarioAtualizado = {
    ...usuario,
    nome: nome.value,
    email: email.value,
    senha: senha.value,
    telefone: telefone.value
  }

  localStorage.setItem('usuario', JSON.stringify(usuarioAtualizado))
}
</script>
<style scoped>
.foto {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid white;
}

.foto img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
</style>