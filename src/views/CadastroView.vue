<template>
    <div class="criar">
<h1>
    Criar conta
</h1>
<p>
    Junte-se à maior plataforma de freelancers do Brasil
</p>
</div>
<div class="tipo-usuario">
  <button
    type="button"
    :class="{ ativo: tipoUsuario === 'cliente' }"
    @click="tipoUsuario = 'cliente'"
  >
    Quero Contratar
  </button>

  <button
    type="button"
    :class="{ ativo: tipoUsuario === 'freelancer' }"
    @click="tipoUsuario = 'freelancer'"
  >
    Sou Profissional
  </button>
</div>

</template>
<script setup>
import { ref } from 'vue'

const tipoUsuario = ref('cliente')
</script>
<style scoped>
h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
p {
  font-size: 16px;
  color: #6b7280;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tipo-usuario {
  display: flex;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  padding: 8px;
  gap: 4px;
}

.tipo-usuario button {
  flex: 1;
  border: none;
  background: transparent;
  padding: 10px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
}

.tipo-usuario button.ativo {
  background: #2563eb;
  color: white;
}
</style>