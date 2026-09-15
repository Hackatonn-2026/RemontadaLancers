
<script setup>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <div class="app-container">
    <AppHeader />
    <main class="conteudo-principal">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.conteudo-principal {
  flex: 1;
  padding-top: 90px;
}
</style>
