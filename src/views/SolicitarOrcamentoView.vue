<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { profissionais } from '@/data/profissionais.js'

const route = useRoute()
const router = useRouter()
const nome = ref('')
const email = ref('')
const descricao = ref('')
const prazo = ref('')
const enviado = ref(false)

const usuarioLogado = JSON.parse(localStorage.getItem('usuario') || '{}')
nome.value = usuarioLogado.nome || ''
email.value = usuarioLogado.email || ''
const profissionalSelecionado = profissionais.find(
  profissional => profissional.id == route.query.profissional
)

function enviarOrcamento() {
  if (!nome.value || !email.value || !descricao.value) {
    alert('Por favor preencha os campos obrigatorios!')
    return
  }

  const novoPedido = {
    id: Date.now(),
    nome: nome.value,
    email: email.value,
    descricao: descricao.value,
    prazo: prazo.value,
    profissional: profissionalSelecionado?.nome || 'Profissionais disponíveis'
  }

  usuarioLogado.pedidosOrcamento = usuarioLogado.pedidosOrcamento || []
  usuarioLogado.pedidosOrcamento.push(novoPedido)
  localStorage.setItem('usuario', JSON.stringify(usuarioLogado))
  localStorage.setItem('contaSalva', JSON.stringify(usuarioLogado))
  enviado.value = true
}
</script>

<template>
  <main class="orcamento-page">
    <section class="orcamento-card">
      
      <div v-if="enviado" class="sucesso">
        <span class="sucesso-icone">✓</span>
        <h1>Pedido enviado!</h1>
        <p>Seu pedido foi salvo. Em breve você poderá receber propostas de profissionais.</p>
        <button type="button" class="botao-principal" @click="router.push('/buscar')">
          Continuar buscando
        </button>
      </div>

      <div v-else>
        <button type="button" class="voltar" @click="router.back()">← Voltar</button>
        <p class="etiqueta">SOLICITE UM ORÇAMENTO</p>
        
        <h1 v-if="profissionalSelecionado">Fale com {{ profissionalSelecionado.nome }}</h1>
        <h1 v-else>Conte o que você precisa</h1>

        <p class="intro">Conte do seu jeito o que você gostaria de colocar em prática.</p>

        <div v-if="profissionalSelecionado" class="profissional-resumo">
          <strong>{{ profissionalSelecionado.nome }}</strong>
          <span>{{ profissionalSelecionado.profissao }} · R$ {{ profissionalSelecionado.precoHora }}/hora</span>
        </div>

        <form class="orcamento-form" @submit.prevent="enviarOrcamento">
          <label>
            Seu nome
            <input v-model="nome" type="text" placeholder="Como podemos chamar você?" required />
          </label>

          <label>
            Seu e-mail
            <input v-model="email" type="email" placeholder="voce@exemplo.com" required />
          </label>

          <label>
            O que você gostaria de fazer?
            <textarea v-model="descricao" rows="5" placeholder="Pode escrever do seu jeito. O que você tem em mente?" required></textarea>
          </label>

          <label>
            Quando seria bom para você?
            <select v-model="prazo">
              <option value="">Escolha uma opção</option>
              <option value="O quanto antes">O quanto antes</option>
              <option value="Nos próximos 15 dias">Nos próximos 15 dias</option>
              <option value="Nos próximos 30 dias">Nos próximos 30 dias</option>
              <option value="Ainda estou planejando">Ainda estou planejando</option>
            </select>
          </label>

          <button type="submit" class="botao-principal">Solicitar orçamento</button>
        </form>
      </div>

    </section>
  </main>
</template>

<style scoped>
.orcamento-page {
  min-height: 100vh;
  padding: 48px 20px;
  background: #eef4ff;
}

.orcamento-card {
  width: min(100%, 680px);
  margin: 0 auto;
  padding: 36px;
  background: #fff;
  border: 1px solid #dbe5f4;
  border-radius: 14px;
  box-shadow: 0 12px 32px rgb(15 23 42 / 8%);
}

.voltar {
  padding: 0;
  border: 0;
  background: transparent;
  color: #2563eb;
  font-weight: 700;
  cursor: pointer;
}

.etiqueta {
  margin: 32px 0 8px;
  color: #2563eb;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

h1 {
  margin: 0;
  color: #172033;
  font-size: 30px;
}

.intro {
  margin: 10px 0 22px;
  color: #64748b;
}

.profissional-resumo {
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-bottom: 22px;
  padding: 14px 16px;
  border-left: 4px solid #2563eb;
  background: #f5f8ff;
  color: #172033;
}

.profissional-resumo span {
  color: #64748b;
  font-size: 14px;
}

.orcamento-form {
  display: grid;
  gap: 16px;
}

.orcamento-form label {
  display: grid;
  gap: 6px;
  color: #334155;
  font-size: 14px;
  font-weight: 700;
}

input,
textarea,
select {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  color: #172033;
  background: #fff;
  font: inherit;
}

textarea {
  resize: vertical;
}

input:focus,
textarea:focus,
select:focus {
  border-color: #2563eb;
  outline: 3px solid rgb(37 99 235 / 14%);
}

.botao-principal {
  min-height: 44px;
  padding: 12px 18px;
  border: 0;
  border-radius: 8px;
  background: #2563eb;
  color: #fff;
  font-weight: 800;
  cursor: pointer;
}

.botao-principal:hover {
  background: #1d4ed8;
}

.sucesso {
  padding: 34px 10px;
  text-align: center;
}

.sucesso-icone {
  display: grid;
  width: 52px;
  height: 52px;
  margin: 0 auto 16px;
  place-items: center;
  border-radius: 50%;
  background: #dcfce7;
  color: #15803d;
  font-size: 28px;
  font-weight: 800;
}

.sucesso p {
  margin: 10px auto 24px;
  max-width: 440px;
  color: #64748b;
}

@media (max-width: 560px) {
  .orcamento-card {
    padding: 24px 20px;
  }
}
</style>