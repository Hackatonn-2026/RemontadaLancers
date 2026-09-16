<script setup>
import { ref } from 'vue'
import { profissionais } from '@/data/profissionais.js'
import { categorias } from '@/data/categorias.js'

const filtro = ref('')

function categoriasFiltradas() {
  return categorias.filter((categoria) =>
    categoria.nome.toLowerCase().includes(filtro.value.toLowerCase())
  )
}

function profissionaisFiltrados() {
  return profissionais.filter((profissional) =>
    profissional.nome.toLowerCase().includes(filtro.value.toLowerCase())
  )
}
</script>

<template>
  <div class="pagina-busca">
    <input type="text" v-model="filtro" placeholder="Buscar..." />

    <h2>Categorias</h2>
    <div v-for="categoria in categoriasFiltradas()" :key="categoria.nome">
      {{ categoria.nome }}
    </div>

    <h2>Profissionais</h2>
    <div v-for="profissional in profissionaisFiltrados()" :key="profissional.id">
      {{ profissional.nome }}
    </div>
  </div>
</template>
