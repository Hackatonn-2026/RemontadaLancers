<template>
  <main class="app-shell">
    <h1>Remontada Lancers</h1>
    <p>Seu projeto começou do zero.</p>
  </main>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: grid;
  place-items: center;
  text-align: center;
  background: #0f172a;
  color: #f8fafc;
}

h1 {
  font-size: clamp(2rem, 4vw, 4rem);
  margin-bottom: 0.5rem;
}

p {
  font-size: 1.1rem;
  opacity: 0.85;
}
</style>
