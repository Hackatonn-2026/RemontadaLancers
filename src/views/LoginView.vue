<template>
  <main class="pagina-login">
    <section class="card-login">
      <div class="cabecalho-login">
        <h1>Entrar na sua conta</h1>
        <p>Que bom te ver de novo.</p>
      </div>

      <form class="form-login" @submit.prevent="entrar">
        <Inputs v-model="email" label="E-mail" type="email" placeholder="seuemail@exemplo.com" />

        <Inputs v-model="senha" label="Senha" type="password" placeholder="Digite sua senha" />

        <button type="submit" class="botao-entrar">Entrar</button>
        <div class="link-cadastro">
          <p>Ainda não tem conta?</p>
          <RouterLink to="/cadastro" class="botao-cadastro"> Criar conta </RouterLink>
        </div>
      </form>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Inputs from '../components/Inputs.vue'
import { buscarUsuarioPorCredenciais, salvarUsuarioAtual } from '@/data/usuarios'

const router = useRouter()
const email = ref('')
const senha = ref('')

function entrar() {
  const usuario = buscarUsuarioPorCredenciais(email.value, senha.value)

  if (!usuario) {
    alert('E-mail ou senha incorretos!')
    return
  }

  salvarUsuarioAtual(usuario)
  window.dispatchEvent(new Event('auth-change'))
  alert('Login realizado com sucesso!')

  const tipoUsuario = usuario.tipoUsuario || usuario.tipo
  const rota =
    tipoUsuario === 'freelancer' ? `/usuario-freelancer/${usuario.id || 'perfil'}` : '/perfil'

  router.push(rota)
}
</script>

<style scoped>
.pagina-login {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background: #f5f7fb;
}

.card-login {
  width: min(100%, 420px);
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 12px 28px rgb(15 23 42 / 12%);
  padding: 32px 28px;
}

.cabecalho-login {
  margin-bottom: 24px;
}

.cabecalho-login h1 {
  margin: 0 0 8px;
  font-size: 2rem;
  color: #111827;
}

.cabecalho-login p {
  margin: 0;
  font-size: 1rem;
  color: #4b5563;
}

.form-login {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.botao-entrar {
  border: none;
  border-radius: 10px;
  background: #2563eb;
  color: #fff;
  padding: 12px 18px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
}
.link-cadastro {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
  flex-wrap: wrap;
}

.link-cadastro p {
  margin: 0;
  color: #4b5563;
}

.botao-cadastro {
  color: #2563eb;
  padding: 8px 12px;
  font-size: 0.9rem;
  font-weight: 700;
}
</style>
