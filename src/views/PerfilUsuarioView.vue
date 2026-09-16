<template>
  <main class="perfil">

    <section class="perfil-header">
      <div class="foto">
        <img src="/perfil.avif" alt="Foto de perfil">
      </div>

      <div class="dados-principais">
        <h1>{{ usuario.nome }}</h1>
        <p>{{ usuario.email }}</p>
         <RouterLink to="/editar-perfil" class="botao">
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

      </div>
    </section>


    
    <section class="card">
      <div class="titulo-servicos">
        <h2>Serviços contratados</h2>
      </div>

      <p v-if="!usuario.servicos.length">Nenhum serviço contratado</p>
      <ul v-else class="lista-servicos">
        <li v-for="servico in usuario.servicos" :key="servico.id || servico.nome || servico">
          {{ servico.nome || servico }}
        </li>
      </ul>
    </section>

  </main>
</template>


<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function carregarUsuario() {
  try {
    return JSON.parse(localStorage.getItem('usuario')) || {}
  } catch {
    return {}
  }
}

const dadosUsuario = carregarUsuario()
const usuario = {
  ...dadosUsuario,
  servicos: Array.isArray(dadosUsuario.servicos) ? dadosUsuario.servicos : [],
}
function sair() {
  const usuarioAtual = carregarUsuario()
  localStorage.setItem('contaSalva', JSON.stringify(usuarioAtual))
  localStorage.removeItem('usuario')
  window.dispatchEvent(new Event('auth-change'))
  router.push('/login')
}

</script>

<style scoped>
.perfil {
  width: min(100% - 32px, 900px);
  margin: 40px auto;
  padding: 0;
}
.perfil-header {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 28px 32px;
  background: #eef5ff;
  border-radius: 15px;
  margin-bottom: 24px;
}
.foto {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 4px solid white;
  box-shadow: 0 4px 14px rgb(15 23 42 / 12%);
}
.dados-principais {
  flex: 1;
}
.dados-principais h1 {
  margin: 0 0 8px;
  color: #172554;
  font-size: 28px;
  font-weight: 700;
}
.dados-principais p {
  margin: 0 0 16px;
  color: #64748b;
}
.card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 15px;
  padding: 28px 32px;
  margin-bottom: 24px;
}
.card h2 {
  margin: 0 0 20px;
  color: #172554;
  font-size: 20px;
  font-weight: 700;
}
.card p {
  margin: 5px 0 0;
  color: #64748b;
}
.informacoes {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
.informacoes strong {
  color: #172554;
  font-size: 14px;
}
.titulo-servicos {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.foto img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.botao {
  display: inline-block;
  padding: 10px 18px;
  border: 0;
  border-radius: 6px;
  background: #2563eb;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  margin-right: 8px;
}
.botao:hover {
  background: #1d4ed8;
}
.lista-servicos {
  margin: 0;
  padding-left: 20px;
  color: #64748b;
}
.lista-servicos li + li {
  margin-top: 8px;
}

@media (max-width: 640px) {
  .perfil {
    width: min(100% - 20px, 900px);
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

  .informacoes {
    grid-template-columns: 1fr;
  }

  .card {
    padding: 24px 20px;
  }

  .botao {
    margin-bottom: 8px;
  }
}
</style>