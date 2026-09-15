<script setup>
import { ref } from 'vue'
import { profissionais } from '@/data/profissionais.js'
import { categorias } from '@/data/categorias.js'

const filtro = ref('')

function filtrar(lista) {
  if (filtro.value === '') return lista

  return lista.filter((item) =>
    item.nome.toLowerCase().includes(filtro.value.toLowerCase())
  )
}
</script>

<template>
  <div class="pagina-busca">
    <input type="text" v-model="filtro" placeholder="Buscar..." />

    <h2>Categorias</h2>
    <div v-for="cat in filtrar(categorias)" :key="cat.nome">{{ cat.nome }}</div>

    <h2>Profissionais</h2>
    <div v-for="prof in filtrar(profissionais)" :key="prof.id">{{ prof.nome }}</div>
  </div>
</template>
