<template>
  <div class="busca-page">
    <div class="container">
      <header class="busca-header">
        <h1>Profissionais</h1>
        <p>{{ profissionaisFiltrados.length }} profissionais encontrados para <strong>{{ categoriaSelecionada }}</strong></p>
      </header>

      <main class="lista-profissionais">
        <div v-if="profissionaisFiltrados.length === 0" class="empty-state">
          Nenhum profissional encontrado para esta categoria.
        </div>

        <div class="cards-grid" v-else>
          <article v-for="prof in profissionaisFiltrados" :key="prof.id" class="card-profissional">
            <h3>{{ prof.nome }}</h3>
            <p class="profissao">{{ prof.profissao }}</p>
            <p class="descricao">{{ prof.descricao }}</p>

            <button type="button" class="btn-ver-perfil" @click="irParaPerfil(prof)">
              Ver Perfil
            </button>
          </article>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { profissionais } from '@/data/profissionais.js'

const route = useRoute()
const router = useRouter()

const categoriaSelecionada = computed(() => route.query.busca || 'Todas as categorias')

const tirarLetrasEspeciais = (texto) => 
  texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') // remove as letras especiais "á" e tals, 

const profissionaisFiltrados = computed(() => {
  const busca = route.query.busca
  if (!busca) return profissionais

  const buscaSemLetrasEspeciais = tirarLetrasEspeciais(busca)

  return profissionais.filter((prof) => {
    if (prof.categoria && tirarLetrasEspeciais(prof.categoria) === buscaSemLetrasEspeciais) {
      return true
    }
    const profissaoSemLetrasEspeciais = prof.profissao ? tirarLetrasEspeciais(prof.profissao) : ''
    const descricaoSemLetrasEspeciais = prof.descricao ? tirarLetrasEspeciais(prof.descricao) : ''
    return profissaoSemLetrasEspeciais.includes(buscaSemLetrasEspeciais)
      || descricaoSemLetrasEspeciais.includes(buscaSemLetrasEspeciais)
  })
})

function irParaPerfil({ id }) {
  router.push(`/perfil-freelancer/${id}`)
}
</script>

<style scoped>
.busca-page {
  background-color: #f9fafb;
  min-height: 100vh;
  padding: 40px 0;
  font-family: Arial, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.busca-header h1 {
  font-size: 32px;
  color: #111827;
  margin-bottom: 8px;
}

.busca-header p {
  color: #6b7280;
  margin-bottom: 30px;
  font-size: 15px;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
}

.empty-state {
  padding: 40px;
  text-align: center;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  color: #6b7280;
}

.card-profissional {
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card-profissional h3 {
  margin: 0;
  font-size: 17px;
  color: #1f2937;
}

.profissao {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #2563eb;
}

.descricao {
  margin: 0;
  font-size: 14px;
  color: #6b7280;
  flex: 1;
}

.btn-ver-perfil {
  margin-top: 12px;
  height: 40px;
  border: 0;
  border-radius: 9px;
  background: #2563eb;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.btn-ver-perfil:hover {
  background: #1d4ed8;
}
</style>