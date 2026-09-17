<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseButton from '@/components/Button.vue'
import { cadastrarServico } from '@/data/servicos'

const listaCategorias = [
  'Desenvolvimento',
  'Design',
  'Elétrica',
  'Informática',
  'Jardinagem',
  'Fotografia',
  'Aulas',
  'Pintura',
  'Mecânica',
  'Hidráulica',
  'Estética & Beleza',
  'Segurança',
  'Finanças & Contabilidade',
  'Reformas & Construção',
  'Gastronomia & Eventos',
  'Marketing & Redes Sociais',
  'Serviços Jurídicos',
  'Tradução & Idiomas',
]

const router = useRouter()
const etapa = ref(1)
const usuarioAtual = JSON.parse(localStorage.getItem('usuario'))

const dataFormatada = ref('')
const turnoSelecionado = ref('Manhã')

// guardar os dados do usuario
const novoServico = ref({
  // id que vincula a solicitacao com quem ta a cadastrando
  usuarioId: usuarioAtual?.id || null,
  titulo: '',
  categoria: listaCategorias[0],
  descricao: '',
  localizacao: 'Zona Sul',
  preco: 0,
  orcamento: ''
})

const avancarParaResumo = () => {
  novoServico.value.orcamento = `R$ ${Number(novoServico.value.preco).toFixed(2).replace('.', ',')}`
  etapa.value = 2
}

const voltarParaFormulario = () => {
  etapa.value = 1
}

// adiciona o novo serviço a lista de serviços e volta pra a pagina serviços
const publicarServico = () => {
  if (!usuarioAtual) {
    router.push('/login')
    return
  }

  cadastrarServico({ ...novoServico.value })
  router.push('/servicos')
}
</script>

<template>
  <main>
    <section>
      <h1>Contratar serviço</h1>
      <p>Descreva o serviço que você deseja solicitar para profissionais qualificados.</p>
    </section>

    <div v-if="etapa === 1">
      <form @submit.prevent="avancarParaResumo"> <!--impede a pagina de ser recarregada, vai pro resumo-->
        <fieldset>
          <legend>1. Sobre o serviço</legend>

          <label>Categoria do serviço</label>
          <select v-model="novoServico.categoria">
            <option v-for="categoria in listaCategorias" :key="categoria" :value="categoria">
              {{ categoria }}
            </option>
          </select>

          <label>Título do serviço</label>
          <input
            v-model="novoServico.titulo"
            type="text"
            required
          />

          <label>Descrição detalhada</label>
          <textarea
            v-model="novoServico.descricao"
            required
          ></textarea>
        </fieldset>

        <fieldset>
          <legend>2. Local e data</legend>

          <label>Região / Zona</label>
          <select v-model="novoServico.localizacao">
            <option value="Zona Sul">Zona Sul</option>
            <option value="Zona Norte">Zona Norte</option>
            <option value="Zona Leste">Zona Leste</option>
            <option value="Zona Oeste">Zona Oeste</option>
            <option value="Centro">Centro</option>
          </select>

          <label>Dia do serviço</label>
          <input
            v-model="dataFormatada"
            type="date"
            required
          />

          <label>Turno</label>
          <select v-model="turnoSelecionado">
            <option value="Manhã">Manhã</option>
            <option value="Tarde">Tarde</option>
            <option value="Noite">Noite</option>
            <option value="Integral">Integral</option>
          </select>
        </fieldset>

        <fieldset>
          <legend>3. Orçamento</legend>

          <label>Orçamento estimado (R$)</label>
          <input
            v-model.number="novoServico.preco"
            type="number"
            required
          />
        </fieldset>

        <BaseButton type="submit">
          Revisar solicitação
        </BaseButton>
      </form>
    </div>

    <div v-else>
      <div class="resumo-card">
        <h2>Resumo da solicitação</h2>


        <p><strong>Categoria:</strong> {{ novoServico.categoria }}</p>
        <p><strong>Título:</strong> {{ novoServico.titulo }}</p>
        <p><strong>Descrição:</strong> {{ novoServico.descricao }}</p>
        <p><strong>Localização:</strong> {{ novoServico.localizacao }}</p>
        <p><strong>Data:</strong> {{ dataFormatada }} ({{ turnoSelecionado }})</p>
        <p><strong>Orçamento:</strong> {{ novoServico.orcamento }}</p>

        <div class="resumo-acoes">
          <BaseButton variant="secondary" @click="voltarParaFormulario">
            Voltar
          </BaseButton>

          <BaseButton @click="publicarServico">
            Publicar serviço
          </BaseButton>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
}

section {
  margin-bottom: 24px;
  text-align: center;
}

h1,
h2 {
  margin: 0 0 10px;
  color: black;
}

p {
  color: black;
}

form,
.resumo-card {
  display: grid;
  gap: 20px;
  padding: 28px;
  border: 1px solid #d1d5db;
  border-radius: 15px;
  background: white;
}

fieldset {
  display: grid;
  gap: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 18px;
}

legend,
label {
  color: black;
  font-size: 14px;
  font-weight: 600;
}

input,
select,
textarea {
  width: 100%;
  box-sizing: border-box;
  padding: 11px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background: white;
  color: black;
  font: inherit;
}

textarea {
  min-height: 110px;
}

.resumo-acoes {
  display: flex;
  gap: 12px;
  margin-top: 20px;
}

strong{
  font-weight: bold;
}

</style>
