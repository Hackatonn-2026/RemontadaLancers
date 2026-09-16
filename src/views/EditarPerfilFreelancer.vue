<template>
  <main class="pagina-edicao">
    <section class="cabecalho-edicao">
      <div class="foto">
        <img src="/perfil.avif" alt="Foto de perfil">
      </div>
      <h1>Editar perfil</h1>
      <p>Atualize suas informações pessoais e profissionais.</p>
    </section>

    <form class="informacao" @submit.prevent="salvarAlteracoes">
      <h2 class="informacao-titulo">Informações pessoais</h2>
      <div class="formulario">
        <Inputs v-model="nome" label="Nome" placeholder="Seu nome completo" />
        <Inputs v-model="email" label="E-mail" type="email" placeholder="seuemail@exemplo.com" />
        <Inputs v-model="senha" label="Senha" type="password" placeholder="Digite sua senha" />
        <Inputs v-model="telefone" label="Telefone" type="tel" placeholder="Seu telefone" />

        <div class="profissional">
          <h2>Informações profissionais</h2>
          <Inputs v-model="profissao" label="Profissão/Especialidade" placeholder="Ex: Dev Full Stack" />

          <div class="campo">
            <label for="anos">Anos de experiência</label>
            <select id="anos" v-model="anosExperiencia">
              <option value="">Selecione seus anos de experiência</option>
              <option value="0-1">0-1 anos</option>
              <option value="1-3">1-3 anos</option>
              <option value="3-5">3-5 anos</option>
              <option value="5+">5+ anos</option>
            </select>
          </div>

          <div class="campo">
            <label for="descricao">Descrição profissional</label>
            <textarea id="descricao" v-model="descricao" placeholder="Fale sobre sua experiência" rows="5" />
          </div>

          <div class="categorias">
            <h4>Categorias de atuação</h4>
            <div class="lista-categorias">
              <label v-for="categoria in opcoesCategorias" :key="categoria.valor">
                <input v-model="categorias" type="checkbox" :value="categoria.valor">
                {{ categoria.nome }}
              </label>
            </div>
          </div>
        </div>
        <div class="acoes">
          <button type="submit" class="botao">Salvar alterações</button>
        </div>
      </div>
    </form>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Inputs from '../components/Inputs.vue'

const router = useRouter()
const usuario = carregarUsuario()
const rotaPerfil = usuario.tipoUsuario === 'freelancer' ? `/usuario-freelancer/${usuario.id || 'perfil'}`: '/perfil'
const nome = ref(usuario.nome || '')
const email = ref(usuario.email || '')
const senha = ref(usuario.senha || '')
const telefone = ref(usuario.telefone || '')
const profissao = ref(usuario.profissao || '')
const anosExperiencia = ref(usuario.anosExperiencia || '')
const descricao = ref(usuario.descricao || '')
const categorias = ref(Array.isArray(usuario.categorias) ? [...usuario.categorias] : [])
const opcoesCategorias = [
  { valor: 'marketing', nome: 'Marketing' },
  { valor: 'design', nome: 'Design' },
  { valor: 'edicao', nome: 'Edição' },
  { valor: 'consultoria', nome: 'Consultoria' },
  { valor: 'desenvolvimento', nome: 'Desenvolvimento' },
  { valor: 'traducao', nome: 'Tradução' },
]
function carregarUsuario() {
  try {
    return JSON.parse(localStorage.getItem('usuario')) || {}
  } catch {
    return {}
  }
}
function salvarAlteracoes() {
  const usuarioAtualizado = {
    ...usuario,
    nome: nome.value,
    email: email.value,
    senha: senha.value,
    telefone: telefone.value,
    profissao: profissao.value,
    anosExperiencia: anosExperiencia.value,
    descricao: descricao.value,
    categorias: categorias.value,
  }
  localStorage.setItem('usuario', JSON.stringify(usuarioAtualizado))
  router.push(rotaPerfil)
}
</script>
<style scoped>
.pagina-edicao {
  width: min(100% - 32px, 900px);
  margin: 32px auto;
  padding-bottom: 32px;
}
.cabecalho-edicao {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  text-align: center;
}
.cabecalho-edicao h1 {
  margin: 16px 0 4px;
  color: #172554;
}
.cabecalho-edicao p {
  margin: 0;
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
  border-radius: 12px;
  background: white;
  box-shadow: 0 4px 16px rgb(15 23 42 / 5%);
}
.informacao-titulo,
.profissional h2 {
  margin: 0;
  color: #172554;
  font-size: 20px;
  font-weight: 700;
}
.informacao-titulo {
  padding: 28px 32px 0;
}
.formulario {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 28px;
  padding: 28px 32px 32px;
}
.profissional {
  display: grid;
  grid-column: 1 / -1;
  gap: 20px;
  padding-top: 8px;
  border-top: 1px solid #e5e7eb;
}
.campo {
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.campo label,
.categorias h4 {
  color: #111827;
  font-size: 14px;
  font-weight: 700;
}
.campo select,
.campo textarea {
  box-sizing: border-box;
  width: 100%;
  padding: 11px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background: white;
  color: #374151;
  font: inherit;
  resize: vertical;
}
.campo select:focus,
.campo textarea:focus {
  outline: 2px solid #93c5fd;
  border-color: #2563eb;
}
.categorias {
  padding: 0;
  border: 0;
}
.categorias h4 {
  margin-bottom: 12px;
}
.lista-categorias {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.lista-categorias label {
  display: flex;
  align-items: center;
  gap: 7px;
  color: #374151;
  font-size: 14px;
}
.lista-categorias input {
  width: 16px;
  height: 16px;
  accent-color: #2563eb;
}
.acoes {
  display: flex;
  grid-column: 1 / -1;
  justify-content: flex-end;
  gap: 12px;
  padding-top: 8px;
}
.botao {
  min-height: 40px;
  padding: 10px 18px;
  border: 0;
  border-radius: 6px;
  background-color: #2563eb;
  color: white;
  font: inherit;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
}
.botao:hover {
  background-color: #1d4ed8;
}
</style>