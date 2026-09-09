

<script setup>

//  componente botão normal ou link de navegação

defineOptions({
  name: 'BaseButton',
})

//  propriedades que o componente aceita:
// cada uma tem um valor padrão, que é o que vai valer se não for informado

defineProps({
  // se existir, o componente vira um RouterLink para essa rota
  to: {
    type: String,
    default: null,
  },

  // muda a aparência do botão, primary = azul, secondary = branco
  variant: {
    type: String,
    default: 'primary',
  },

  // botão normal
  type: {
    type: String,
    default: 'button',
  },

  // true = botão desabilitado
  disabled: {
    type: Boolean,
    default: false,
  },
})
// define evento click
const emit = defineEmits(['click'])
</script>

<template>
  <!-- se existir "to", mostra um link de rota -->
  <RouterLink
    v-if="to"
    :to="to"
    :class="['button', variant]"
    @click="emit('click', $event)"
  >
    <slot />
  </RouterLink>

   <!--se não existir "to", mostra um botão normal -->
  <button
    v-else
    :type="type"
    :disabled="disabled"
    :class="['button', variant]"
    @click="emit('click', $event)"
  >
    <slot />
  </button>
</template>

<style scoped>
/* base do botão/link */
.button {
  border: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 0 10px 10px 0;
  text-decoration: none;
  display: inline-block;
  padding: 10px 16px;
  box-sizing: border-box;
  transition: opacity 0.2s ease;
}

/* primary = azul */
.primary {
  background: #2563eb;
  color: white;
}

/* secondary = branco */
.secondary {
  background: white;
  color: #1f2937;
  border: 1px solid #d1d5db;
}

.button:hover {
  opacity: 0.9;
}
</style>
