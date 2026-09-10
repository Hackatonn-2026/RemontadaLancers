<script setup>
import CategoriasComp from '@/components/CategoriasComp.vue'
</script>

<template>
  <main class="pagina">
    <section class="topo">
      <p class="destaque">Onde você precisa</p>
      <h1>Encontre profissionais por área de atuação</h1>
      <p class="intro">
        Explore as categorias e escolha alguém com a experiência certa para o seu projeto, serviço ou necessidade.
      </p>
    </section>

    <CategoriasComp />
  </main>
</template>

<style scoped>
.pagina {
  min-height: 100vh;
  background: #fff;
}

.topo {
  max-width: 820px;
  margin: 0 auto;
  padding: 50px 20px 10px;
  text-align: center;
}

.destaque {
  margin: 0 0 8px;
  color: #2563eb;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.topo h1 {
  margin: 0;
  color: #111827;
  font-size: 2.5rem;
  line-height: 1.2;
}

.intro {
  max-width: 620px;
  margin: 12px auto 0;
  color: #4b5563;
  font-size: 1rem;
  line-height: 1.6;
}
</style>
