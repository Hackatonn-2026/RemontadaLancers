<template>
  <main class="perfil">

    <section class="perfil-header">
      <div class="foto">
  <img src="/perfil.avif" alt="Foto de perfil">
</div>

      <div class="dados-principais">
        <h1>{{ usuario.nome }}</h1>
        <p>{{ usuario.email }}</p>
      </div>

    </section>

    <section class="card">
      <h2>Informações</h2>

      <div class="informacoes">
        <div>
          <strong>E-mail</strong>
          <p>{{ usuario.email }}</p>
        </div>

        <div>
          <strong>Telefone</strong>
          <p>{{ usuario.telefone || 'Não informado' }}</p>
        </div>

        <div>
          <strong>Email</strong>
          <p>{{ usuario.email || 'Não informado' }}</p>
        </div>
      </div>
    </section>


    
    <section class="card">
      <div class="titulo-servicos">
        <h2>Serviços contratados</h2>

        <button class="ver-todos">
          Ver todos
        </button>
      </div>

    <div>
          <strong>Servicos</strong>
          <p>{{ usuario.servicos || 'Nenhum serviço contratado' }}</p>
        </div>
    </section>

  </main>
</template>


<script setup>

const usuario = JSON.parse(
  localStorage.getItem('usuario')
) || {}

</script>

<style scoped>
.perfil {
  max-width: 1000px;
  margin: 40px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}
.perfil-header {
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 30px;
  background: #eef5ff;
  border-radius: 15px;
  margin-bottom: 20px;
}
.foto {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: #dbe8ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
}
.dados-principais {
  flex: 1;
}
.dados-principais h1 {
  margin: 0 0 8px;
  color: #172554;
}
.dados-principais p {
  margin: 5px 0;
  color: #64748b;
}
.card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 20px;
}
.card h2 {
  margin-top: 0;
  color: #172554;
}
.card p {
  color: #64748b;
}
.informacoes {
  display: flex;
  gap: 80px;
}
.informacoes strong {
  color: #172554;
}
.titulo-servicos {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ver-todos {
  border: none;
  background: none;
  color: #2563eb;
  cursor: pointer;
}
.foto {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;
}

.foto img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>