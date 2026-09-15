<script setup>
import { ref } from 'vue'

const emit = defineEmits(['filtrar'])

const opcoesPreco = [
  { label: 'Até R$ 50', min: 0, max: 50 },
  { label: 'R$ 50 - R$ 100', min: 50, max: 100 },
  { label: 'R$ 100 - R$ 200', min: 100, max: 200 },
  { label: 'Acima de R$ 200', min: 200, max: Infinity },
]

const opcoesNota = [
  { label: '4.5 ou mais', min: 4.5 },
  { label: '4.0 ou mais', min: 4.0 },
  { label: '3.0 ou mais', min: 3.0 },
]

const precos = ref([])
const notas = ref([])

function aplicarFiltros() {
  emit('filtrar', {
    precos: precos.value,
    notas: notas.value
  })
}

function limparFiltros() {
  precos.value = []
  notas.value = []
  aplicarFiltros()
}
</script>

<template>
  <section class="filter-sidebar">
    <h2>Filtros</h2>

    <form @submit.prevent="aplicarFiltros">
      <fieldset>
        <legend>Preço por hora</legend>
        <label v-for="opcao in opcoesPreco" :key="opcao.label" class="check-label">
          <input v-model="precos" type="checkbox" :value="opcao">
          <span>{{ opcao.label }}</span>
        </label>
      </fieldset>

      <fieldset class="fieldset-nota">
        <legend>Avaliação</legend>
        <label v-for="opcao in opcoesNota" :key="opcao.label" class="check-label">
          <input v-model="notas" type="checkbox" :value="opcao">
          <span>{{ opcao.label }}</span>
        </label>
      </fieldset>

      <button type="submit" class="btn-filtrar">Filtrar</button>
      <button type="button" @click="limparFiltros">Limpar Filtros</button>
    </form>
  </section>
</template>

<style scoped>
.filter-sidebar {
  width: 256px;
  padding: 26px 24px 24px;
  border: 1px solid #e1e4e8;
  border-radius: 14px;
  background: #fff;
  color: #344054;
  box-shadow: 0 2px 4px rgba(16, 24, 40, .08);
  box-sizing: border-box;
}

h2 {
  margin: 0 0 20px;
  color: #1d2939;
  font-size: 18px;
}

legend {
  display: block;
  margin-bottom: 9px;
  color: #475467;
  font-size: 14px;
  font-weight: 600;
}

fieldset {
  margin: 0;
  padding: 0;
  border: 0;
}

.fieldset-nota {
  margin-top: 20px;
}

.check-label {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 12px 0;
  font-size: 14px;
}

.check-label input {
  width: 16px;
  height: 16px;
  margin: 0;
  accent-color: #344054;
}

.btn-filtrar {
  width: 100%;
  height: 40px;
  margin-top: 26px;
  border: 0;
  border-radius: 9px;
  background: #2563eb;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

button[type="button"] {
  width: 100%;
  height: 40px;
  margin-top: 10px;
  border: 0;
  border-radius: 9px;
  background: #f1f2f4;
  color: #1d2939;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}
</style>