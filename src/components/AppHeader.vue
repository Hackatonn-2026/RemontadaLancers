<template>
  <header class="cabecalho">

    <RouterLink to="/" class="logo">
      <div class="icone-logo"></div>
      <span class="texto-logo">Remontada<br />Lancers</span>
    </RouterLink>

    <SearchBar @buscar="executarBusca" />

    <nav class="links-nav">
      <RouterLink to="/" class="link-nav">Home</RouterLink>
      <RouterLink to="/como-funciona" class="link-nav">Como funciona</RouterLink>
      <RouterLink to="/categorias" class="link-nav">Categorias</RouterLink>

    </nav>


    <RouterLink to="/login" class="botao-login">
  Login
</RouterLink>
  </header>
</template>

<script setup>
import SearchBar from './SearchBar.vue';

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
  background: #2563eb;
  border-radius: 50%;
  flex-shrink: 0;
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
  transition: background 0.2s ease, transform 0.1s ease;
  flex-shrink: 0;
}

.botao-cadastrar:hover {
  background: #1d4ed8;
}

.botao-cadastrar:active {
  transform: scale(0.96);
}
</style>
