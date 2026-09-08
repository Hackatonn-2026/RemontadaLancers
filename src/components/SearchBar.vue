<!-- src/components/SearchBar.vue -->
<script setup>
import { ref } from 'vue'

// Estado reativo para guardar o texto digitado
const termoBusca = ref('')

const emit = defineEmits(['buscar'])

function executarBusca () {
  if (termoBusca.value.trim()) {
    emit('buscar', termoBusca.value)
  }
}
</script>

<template>
  <div class="envoltorio-busca">
    <input
      v-model="termoBusca"
      type="text"
      placeholder="Buscar profissionais/serviços"
      class="entrada-busca"
      @keyup.enter="executarBusca"
    />
    <button type="button" class="botao-busca" @click="executarBusca" aria-label="Pesquisar">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </button>
  </div>
</template>

<style scoped>
.envoltorio-busca {
  position: relative;
  flex: 1;
  max-width: 600px;
  display: flex;
  align-items: center;
}

.entrada-busca {
  width: 100%;
  padding: 10px 42px 10px 16px;
  background: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.botao-busca {
  position: absolute;
  right: 12px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #6b7280;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: color 0.2s;
}

.botao-busca:hover {
  color: #2563eb;
}
</style>
