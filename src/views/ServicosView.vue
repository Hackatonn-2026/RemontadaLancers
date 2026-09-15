<template>
  <main class="servicos-page">
    <section class="cabecalho">
      <h1>Serviços pendentes</h1>

      <p>
        Confira os serviços que nossos usuários estão esperando
        alguém para realizar.
      </p>
    </section>

    <section class="conteudo">
      <FilterSidebar
        :categoria="categoriaSelecionada"
        :localizacao="localizacao"
        @atualizarCategoria="categoriaSelecionada = $event"
        @atualizarLocalizacao="localizacao = $event"
      />

      <section class="lista-servicos">
        <ServicoCard
          v-for="servico in servicosFiltrados"
          :key="servico.id"
          :servico="servico"
        />

        <p
          v-if="servicosFiltrados.length === 0"
          class="sem-servicos"
        >
          Nenhum serviço encontrado.
        </p>
      </section>
    </section>

    <RouterLink
      to="/cadastrar-servico"
      class="botao-flutuante"
    >
      +
    </RouterLink>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import { servicos } from '@/data/servicos'
import FilterSidebar from '@/components/FilterSidebar.vue'
import ServicoCard from '@/components/ServicoCard.vue'

const categoriaSelecionada = ref('')
const localizacao = ref('')

const servicosFiltrados = computed(() => {
  return servicos.filter((servico) => {
    const categoriaCorreta =
      categoriaSelecionada.value === '' ||
      servico.categoria === categoriaSelecionada.value

    const localizacaoCorreta =
      servico.localizacao
        .toLowerCase()
        .includes(localizacao.value.toLowerCase())

    return categoriaCorreta && localizacaoCorreta
  })
})
</script>

<style scoped>
.servicos-page {
  min-height: 100vh;
  padding: 45px 7%;
  background: #f4f6fb;
}

.cabecalho {
  margin-bottom: 35px;
}

.cabecalho h1 {
  color: #17245c;
  font-size: 34px;
  margin-bottom: 10px;
}

.cabecalho p {
  color: #555;
  font-size: 16px;
}

.conteudo {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 30px;
  align-items: start;
}

.lista-servicos {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 25px;
}

.sem-servicos {
  color: #555;
}

.botao-flutuante {
  position: fixed;
  right: 35px;
  bottom: 35px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #2349a5;
  color: white;
  font-size: 35px;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.botao-flutuante:hover {
  background: #172f78;
}

@media (max-width: 800px) {
  .conteudo {
    grid-template-columns: 1fr;
  }

  .lista-servicos {
    grid-template-columns: 1fr;
  }
}
</style>
