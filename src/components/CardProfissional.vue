<script setup>
import BaseCard from './BaseCard.vue'
import BaseButton from './Button.vue'

defineProps({
  nome: String,
  profissao: String,
  descricao: String,
  id: Number,
  especialidade: String,
  rating: Number,
  preco: String
})
</script>

<template>
  <BaseCard class="professional-card">

    <h3>{{ nome }}</h3>

    <p class="profissao">{{ profissao }}</p>

    <div class="especialidade">
      {{ especialidade }}
    </div>

    <p class="descricao">{{ descricao }}</p>

    <div class="informacoes-de-trabalho">
      <p class="avaliacao">{{ rating }}</p>
      <p class="preco">{{ preco }}</p>
    </div>

   <!-- expressão para abrir o perfil pelo id do profissional -->

    <BaseButton :to="`/profissional/${id}`" class="ver-perfil">
      Ver Perfil
    </BaseButton>

  </BaseCard>
</template>

<style scoped>
.professional-card {
  width: 280px;
}

.professional-card h3 {
  margin: 0 0 6px;
  font-size: 20px;
}

.profissao {
  margin: 0 0 10px;
  color: #666;
}

.especialidade {
  display: inline-block;
  padding: 5px 9px;
  margin-bottom: 16px;
  border-radius: 999px;
  color: #2563eb;
  background: #eef5ff;
  font-size: 12px;
  font-weight: 600;
}

.descricao {
  margin: 0 0 20px;
  color: #888;
}

.informacoes-de-trabalho {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}


.preco {
  color: #2563eb;
  font-size: 13px;
}

.ver-perfil {
  display: block;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  background: #2563eb;
  color: white;
  text-decoration: none;
}
</style>
