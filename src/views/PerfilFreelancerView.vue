<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { profissionais } from '@/data/profissionais.js'
import AbasPerfil from '../components/AbasPerfil.vue'
import AbaAvaliacao from '@/components/AbaAvaliacao.vue'
import { ref } from 'vue'

const route = useRoute()
const router = useRouter()
const abaAtiva = ref('Sobre')

const profissional = computed(() =>
  profissionais.find(item => item.id === Number(route.params.id))
)

function estrelasTexto(nota = 0) {
  const cheias = Math.round(nota)
  return '★'.repeat(cheias) + '☆'.repeat(5 - cheias)
}

function voltar() {
  router.push('/buscar')
}

</script>

<template>
  <div class="pagina-container">
    <div v-if="!profissional" class="nao-encontrado">
      <p>Profissional não encontrado.</p>
      <button type="button" class="btn-voltar" @click="voltar">Voltar para a busca</button>
    </div>

    <template v-else>
      <header class="cabecalho">
        <div class="container">
          <button type="button" class="btn-voltar" @click="voltar">&larr; Voltar</button>

          <div class="info-principal">
            <div class="avatar">{{ profissional.nome.charAt(0) }}</div>
            <div>
              <h1>{{ profissional.nome }}</h1>
              <p class="profissao">{{ profissional.profissao }}</p>
              <p class="categoria">{{ profissional.categoria }}</p>
              <p class="rating">
                {{ estrelasTexto(profissional.rating) }}
                <span>{{ profissional.rating }} ({{ profissional.reviewsCount }} avaliações)</span>
              </p>
            </div>
          </div>
        </div>
      </header>

      <main class="conteudo-principal">
        <div class="cartao-conteudo">
          <AbasPerfil v-model="abaAtiva" />

          <div class="corpo-aba">
            <div v-if="abaAtiva === 'Sobre'" class="secao-sobre">
              <h2>Sobre</h2>
              <p>{{ profissional.descricao }}</p>
            </div>

            <div v-else-if="abaAtiva === 'Portfólio'" class="aba-vazia">
              Não foi encontrado nenhum item de portfólio.
            </div>

            <AbaAvaliacao
              v-else-if="abaAtiva === 'Avaliações'"
              :profissional="profissional"
            />
          </div>
        </div>

        <aside class="barra-servicos">
          <p class="preco">R$ {{ profissional.precoHora }}<span>/hora</span></p>
        </aside>
      </main>
    </template>
  </div>
</template>

<style scoped>
.pagina-container {
  min-height: 100vh;
  background: #f8fafc;
  font-family: Arial, sans-serif;
}

.nao-encontrado {
  max-width: 600px;
  margin: 80px auto;
  text-align: center;
  color: #6b7280;
}

.container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 24px;
}

.cabecalho {
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
}

.btn-voltar {
  background: none;
  border: 0;
  color: #2563eb;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  padding: 0 0 16px;
}

.info-principal {
  display: flex;
  align-items: center;
  gap: 20px;
}

.avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: #2563eb;
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-principal h1 {
  margin: 0 0 4px;
  font-size: 24px;
  color: #111827;
}

.profissao {
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: #2563eb;
}

.categoria {
  margin: 4px 0;
  font-size: 13px;
  color: #6b7280;
}

.rating {
  margin: 4px 0 0;
  font-size: 14px;
  color: #f5b301;
}

.rating span {
  color: #6b7280;
  margin-left: 6px;
}

.conteudo-principal {
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 32px;
  padding: 32px 24px;
}

.cartao-conteudo {
  background: #fff;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  padding: 32px;
}

.corpo-aba {
  padding-top: 24px;
}

.secao-sobre h2 {
  margin: 0 0 12px;
  font-size: 18px;
  color: #111827;
}

.secao-sobre p {
  color: #374151;
  line-height: 1.6;
}

.aba-vazia {
  color: #9ca3af;
  text-align: center;
  padding: 32px 0;
  font-size: 14px;
}

.barra-servicos {
  background: #fff;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  padding: 24px;
  height: fit-content;
  text-align: center;
}

.preco {
  margin: 0 0 16px;
  font-size: 28px;
  font-weight: 700;
  color: #111827;
}

.preco span {
  font-size: 14px;
  font-weight: 400;
  color: #6b7280;
}

@media (max-width: 900px) {
  .conteudo-principal {
    grid-template-columns: 1fr;
  }
}
</style>