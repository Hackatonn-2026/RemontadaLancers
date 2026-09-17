<template>
  <header class="cabecalho">
    <RouterLink to="/" class="logo">
      <img src="/logoCL.png" alt="CiroLancers logo" class="icone-logo" />
      <span class="texto-logo">Ciro<br />Lancers</span>
    </RouterLink>

    <SearchBar @buscar="executarBusca" />

    <nav class="links-nav">
      <RouterLink to="/" class="link-nav">Home</RouterLink>
      <RouterLink to="/categorias" class="link-nav">Categorias</RouterLink>
      <RouterLink to="/servicos" class="link-nav">Serviços</RouterLink>
    </nav>

    <RouterLink v-if="!estaLogado" to="/login" class="botao-login"> Login </RouterLink>

    <RouterLink v-else :to="rotaPerfil" class="botao-perfil">
      <img src="/perfil.avif" alt="Abrir meu perfil" />
    </RouterLink>
  </header>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import SearchBar from './SearchBar.vue'

const router = useRouter()

function carregarUsuario() {
  try {
    return JSON.parse(localStorage.getItem('usuario')) || null
  } catch {
    return null
  }
}

const usuario = ref(carregarUsuario())
const estaLogado = computed(() => Boolean(usuario.value))
const rotaPerfil = computed(() => {
  if (usuario.value?.tipoUsuario === 'freelancer') {
    return `/usuario-freelancer/${usuario.value.id || 'perfil'}`
  }

  return '/perfil'
})

function atualizarSessao() {
  usuario.value = carregarUsuario()
}

onMounted(() => window.addEventListener('auth-change', atualizarSessao))
onUnmounted(() => window.removeEventListener('auth-change', atualizarSessao))

function executarBusca(termo) {
  router.push({ path: '/buscar', query: { busca: termo } })
}
</script>

<style scoped>
.cabecalho {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 60px;
  background: #ffffff;
  border-bottom: 1px solid #eef0f3;
  box-shadow: 0 2px 8px rgb(15 23 42 / 6%);
  font-family: Arial, sans-serif;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  flex-shrink: 0;
}

.icone-logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  flex-shrink: 0;
  object-fit: cover;
  overflow: hidden;
  display: block;
}

.texto-logo {
  font-weight: bold;
  font-size: 16px;
  color: #000;
  line-height: 1.2;
}

.links-nav {
  display: flex;
  align-items: center;
  gap: 24px;
}

.link-nav {
  color: #4b5563;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease;
}

.link-nav:hover {
  color: #2563eb;
}

.botao-login {
  background: #2563eb;
  color: #fff;
  border: none;
  padding: 10px 24px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition:
    background 0.2s ease,
    transform 0.1s ease;
  flex-shrink: 0;
}

.botao-cadastrar:hover {
  background: #1d4ed8;
}

.botao-cadastrar:active {
  transform: scale(0.96);
}
.botao-perfil {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #dbe8ff;
  color: #2563eb;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 20px;
  flex-shrink: 0;
}
.botao-perfil {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.botao-perfil img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
