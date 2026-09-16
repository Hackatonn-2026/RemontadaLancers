<template>
  <main>
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
       <form class="form">
      <Inputs v-model="nome" label="Nome" type="text" placeholder="Seu nome completo" />
      <Inputs v-model="email" label="E-mail" type="email" placeholder="seuemail@exemplo.com" />
      <Inputs v-model="senha" label="Senha" type="text" placeholder="Digite sua senha" />
      <Inputs v-model="telefone" label="Telefone" type="tel" placeholder="Seu telefone" />
      <h4>Informações Profissionais</h4>
                <Inputs v-model="profissao" label="Profissão/Especialidade" type="text"
                    placeholder="Ex: Dev Full Stack" />
                <div class="campo">
                    <label for="anos">Anos de Experiência</label>

                    <select id="anos" v-model="AnosDeExperiencia">
                        <option value="">Selecione seus anos de experiência</option>
                        <option value="0-1">0-1 anos</option>
                        <option value="1-3">1-3 anos</option>
                        <option value="3-5">3-5 anos</option>
                        <option value="5+">5+ anos</option>
                    </select>
                </div>
                <Inputs v-model="descricao" label="Descrição Profissional" type="textarea"
                    placeholder="Fale sobre sua experiência" />
                <div class="categorias">
                    <label>Categorias de Atuação</label>

                    <div class="lista-categorias">
                        <label>
                            <input type="checkbox" value="marketing" v-model="categorias">
                            Marketing
                        </label>

                        <label>
                            <input type="checkbox" value="design" v-model="categorias">
                            Design
                        </label>

                        <label>
                            <input type="checkbox" value="edicao" v-model="categorias">
                            Edição
                        </label>

                        <label>
                            <input type="checkbox" value="consultoria" v-model="categorias">
                            Consultoria
                        </label>

                        <label>
                            <input type="checkbox" value="desenvolvimento" v-model="categorias">
                            Desenvolvimento
                        </label>

                        <label>
                            <input type="checkbox" value="traducao" v-model="categorias">
                            Tradução
                        </label>
                    </div>
                </div>
      <RouterLink to="/perfil" class="botao" @click="salvarAlteracoes">
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

.form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 34px;
  padding: 0 2rem;
  margin: 2rem;

}

.informacao {
  border: 1px solid #d1d5db;
  border-radius: 15px;
}
.informacao-titulo {
  font-size: 20px;
  font-weight: bold;
  margin: 3rem 0 0 4rem;
}
.botao {
  padding: 8px 15px;
  background-color: #2563eb;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  width: fit-content;
  font-size: 14px;
}
</style>