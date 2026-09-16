<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const nome = ref('')
const contato = ref('')
const descricao = ref('')
const enviado = ref(false)

function enviar() {
  enviado.value = true
}
</script>

<template>
  <main class="pagina-orcamento">
    <section v-if="enviado" class="caixa mensagem">
      <h1>Pedido enviado!</h1>
      <p>O pedido foi salvo com sucesso.</p>
      <button type="button" @click="router.push('/buscar')">Voltar para a busca</button>
    </section>

    <form v-else class="caixa" @submit.prevent="enviar">
      <button type="button" class="voltar" @click="router.back()">Voltar</button>
      <h1>Solicitar orçamento</h1>
      <p>Conte o que você precisa.</p>

      <label>Nome <input v-model="nome" required /></label>
      <label>Contato <input v-model="contato" required /></label>
      <label>Pedido <textarea v-model="descricao" rows="5" required></textarea></label>
      <button type="submit">Enviar pedido</button>
    </form>
  </main>
</template>

<style scoped>
.pagina-orcamento {
  min-height: 100vh;
  padding: 40px 20px;
  background: #f5f7fb;
}

.caixa {
  width: min(100%, 560px);
  margin: auto;
  padding: 28px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
}

form {
  display: grid;
  gap: 16px;
}

h1 {
  margin: 24px 0 8px;
  color: #111827;
}

p {
  color: #6b7280;
}

label {
  display: grid;
  gap: 6px;
  color: #374151;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font: inherit;
}

textarea {
  resize: vertical;
}

button {
  padding: 12px;
  border: 0;
  border-radius: 8px;
  background: #2563eb;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.voltar {
  width: auto;
  padding: 0;
  background: transparent;
  color: #2563eb;
}

.mensagem {
  text-align: center;
}
</style>
