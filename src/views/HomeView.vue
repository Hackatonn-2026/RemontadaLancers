<script setup>
import AppHeader from '@/components/AppHeader.vue'
import SearchBar from '@/components/SearchBar.vue'
</script>

<template>

  <AppHeader />

  <main class="home-view">
    <section class="hero">
      <h1>Encontre um profissional agora</h1>
      <p>Conecte-se com os melhores freelancers para seu projeto</p>
      <SearchBar />

       <div class="stats">
          <div class="stat">
            <h2>35</h2>
            <span>Profissionais Ativos</span>
          </div>

          <div class="stat">
            <h2>670+</h2>
            <span>Projetos Concluídos</span>
          </div>

          <div class="stat">
            <h2>98%</h2>
            <span>Satisfação</span>
          </div>

          <div class="stat">
            <h2>1000</h2>
            <span>Clientes Atendidos</span>
          </div>
        </div>
    </section>
  </main>

</template>

<style scoped>
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 80px 20px 100px;
    h1 {
      font-size: 3.6rem;
      margin-bottom: 10px;
      color: #2563eb;
    }
    p {
      font-size: 1.5rem;
      margin-bottom: 40px;
      color: #8b8f94;
  }
  }

  .stats {
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-bottom: 60px;
  }

  .stat h2 {
  color: #2563eb;
  font-size: 34px;
  }

  .stat span {
  color: #6b7280;
  }

</style>
