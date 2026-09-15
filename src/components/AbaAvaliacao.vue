<template>
  <div>
    <div class="resumo">
      <h2 class="nota-media">{{ profissional.rating }}</h2>
      <p class="estrelas">{{ estrelas }}</p>
      <p class="total">
        Baseado em {{ profissional.reviewsCount }}
        {{ profissional.reviewsCount === 1 ? 'avaliação' : 'avaliações' }}
      </p>
    </div>

    <div class="lista">
      <p v-if="!profissional.reviews?.length" class="sem-avaliacoes">
        Ainda não há avaliações para este profissional.
      </p>

      <div v-for="avaliacao in profissional.reviews" :key="avaliacao.id" class="avaliacao">
        <div class="topo">
          <strong>{{ avaliacao.author }}</strong>
          <span class="data">{{ avaliacao.date }}</span>
        </div>
        <p class="estrelas">{{ estrelasTexto(avaliacao.rating) }}</p>
        <p class="comentario">{{ avaliacao.comment }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  profissional: { type: Object, required: true },
})

// Transforma notas em estrelas
function estrelasTexto(nota = 0) {
  const cheias = Math.round(nota)
  return '★'.repeat(cheias) + '☆'.repeat(5 - cheias)
}

const estrelas = computed(() => estrelasTexto(props.profissional.rating))
</script>

<style scoped>
.resumo {
  background: #f5f5f5;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
}

.nota-media {
  font-size: 36px;
  margin: 0;
  color: #111827;
}

.estrelas {
  color: #f5b301;
  font-size: 20px;
  margin: 4px 0;
}

.total {
  color: #585d64;
}

.lista {
  margin-top: 20px;
}

.sem-avaliacoes {
  padding: 24px 0;
  text-align: center;
  color: #9ca3af;
}

.avaliacao {
  border-bottom: 1px solid #eee;
  padding: 16px 0;
}

.topo {
  display: flex;
  justify-content: space-between;
}

.data {
  color: #82858c;
}

.comentario {
  color: #374151;
}
</style>