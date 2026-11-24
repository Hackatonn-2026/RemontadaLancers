<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import BaseButton from '@/components/Button.vue'

const API_URL = import.meta.env.DEV
  ? 'http://localhost:3000'
  : 'https://remontadalancers.onrender.com'

const route = useRoute()
const servico = ref(null)
const carregando = ref(true)
const erro = ref('')

async function carregarServico() {
  try {
    const resposta = await fetch(`${API_URL}/servicos/${route.params.id}`)

    if (resposta.status === 404) {
      throw new Error('Serviço não encontrado.')
    }

    if (!resposta.ok) {
      throw new Error('Não foi possível carregar o serviço.')
    }

    const dados = await resposta.json()

    if (!dados || dados.id === undefined) {
      throw new Error('Serviço não encontrado.')
    }

    servico.value = dados
  } catch (error) {
    erro.value = error.message
  } finally {
    carregando.value = false
  }
}

onMounted(carregarServico)
</script>

<template>
  <main class="detalhes-servico">
    <p v-if="carregando">Carregando serviço...</p>
    <p v-else-if="erro" class="erro">{{ erro }}</p>

    <article v-else-if="servico" class="cartao-detalhes">
      <p class="categoria">{{ servico.categoria }}</p>
      <h1>{{ servico.titulo }}</h1>
      <p>{{ servico.descricao }}</p>
      <p><strong>Localização:</strong> {{ servico.localizacao }}</p>
      <p><strong>Orçamento:</strong> {{ servico.orcamento }}</p>

      <BaseButton to="/servicos" variant="secondary">Voltar aos serviços</BaseButton>
    </article>
  </main>
</template>

<style scoped>
.detalhes-servico {
  max-width: 800px;
  min-height: 60vh;
  margin: 0 auto;
  padding: 40px 20px;
}

.cartao-detalhes {
  padding: 28px;
  border: 1px solid #e1e1e1;
  border-radius: 12px;
  background: white;
}

.categoria {
  color: #2349a5;
  font-weight: bold;
}

.erro {
  color: #b91c1c;
}
</style>
