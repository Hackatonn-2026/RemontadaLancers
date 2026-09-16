<template>
  <main class="perfil">

    <section class="perfil-header">
      <div class="foto">
  <img src="/perfil.avif" alt="Foto de perfil">
</div>

      <div class="dados-principais">
        <h1>{{ usuario.nome }}</h1>
        <p>{{ usuario.email }}</p>
         <RouterLink to="/editar-perfil-freelancer" class="botao">
                Editar perfil
            </RouterLink>
           <button class="botao" @click="sair">
                Sair
            </button>
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
    <section>
       <div class="card">
        <div class="informacoes-profissionais">
          <h2>Informações Profissionais</h2>
         <strong>Profissão:</strong> 
        <p> {{ usuario.profissao || 'Não informado' }}</p>
         <strong>Anos de Experiência:</strong>
          <p>{{ usuario.anosExperiencia || 'Não informado' }}</p>
        <strong>Descrição:</strong> 
        <p>{{ usuario.descricao || 'Não informado' }}</p>
        </div>
      </div> 
    </section>

  </main>
</template>


<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const usuario = JSON.parse(
  localStorage.getItem('usuario')
) || {}

function sair() {
  localStorage.setItem('contaSalva', JSON.stringify(usuario))
  localStorage.removeItem('usuario')
  window.dispatchEvent(new Event('auth-change'))
  router.push('/login')
}

</script>

<style scoped>
.perfil {
  width: min(100% - 32px, 960px);
  margin: 32px auto;
  padding: 0;
  font-family: Arial, sans-serif;
}
.perfil-header {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 32px;
  background: linear-gradient(135deg, #eef5ff 0%, #f8fbff 100%);
  border: 1px solid #dbe8ff;
  border-radius: 16px;
  margin-bottom: 24px;
}
.foto {
  width: 104px;
  height: 104px;
  border-radius: 50%;
  background: #dbe8ff;
  overflow: hidden;
  flex-shrink: 0;
  border: 4px solid #fff;
  box-shadow: 0 4px 14px rgb(15 23 42 / 12%);
}
.dados-principais {
  flex: 1;
}
.dados-principais h1 {
  margin: 0 0 6px;
  color: #172554;
  font-size: 28px;
  line-height: 1.2;
}
.dados-principais p {
  margin: 0 0 18px;
  color: #64748b;
}
.card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 28px 32px;
  margin-bottom: 24px;
  box-shadow: 0 4px 16px rgb(15 23 42 / 4%);
}
.card h2 {
  margin: 0 0 20px;
  color: #172554;
  font-size: 20px;
}
.card p {
  margin: 6px 0 0;
  color: #64748b;
}
.informacoes {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}
.informacoes strong {
  color: #172554;
  font-size: 14px;
}
.foto img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.informacoes-profissionais {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  align-items: start;
  row-gap: 14px;
}
.informacoes-profissionais h2 {
  grid-column: 1 / -1;
  margin: 0 0 6px;
}
.informacoes-profissionais strong {
  color: #172554;
  font-size: 14px;
}
.informacoes-profissionais p {
  margin: 0;
  line-height: 1.5;
}
.botao {
  display: inline-flex;
  align-items: center;
  min-height: 40px;
  padding: 0 16px;
  background-color: #2563eb;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  margin: 0 8px 0 0;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
}
.botao:hover {
  background-color: #1d4ed8;
}
.botao:active {
  transform: translateY(1px);
}

@media (max-width: 640px) {
  .perfil {
    width: min(100% - 20px, 960px);
    margin: 24px auto;
  }

  .perfil-header {
    align-items: flex-start;
    flex-direction: column;
    padding: 24px 20px;
  }

  .dados-principais {
    width: 100%;
  }

  .dados-principais h1 {
    font-size: 24px;
  }

  .card {
    padding: 24px 20px;
  }

  .informacoes {
    grid-template-columns: 1fr;
  }

  .informacoes-profissionais {
    grid-template-columns: 1fr;
    row-gap: 4px;
  }

  .informacoes-profissionais strong {
    margin-top: 12px;
  }

  .botao {
    margin-bottom: 8px;
  }
}

</style>