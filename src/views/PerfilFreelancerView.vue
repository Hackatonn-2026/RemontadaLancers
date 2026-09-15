<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// import { useUsuarioStore } from '@/stores/usuario'
import { profissionais } from '@/data/profissionais.js'
// import CabecalhoPerfil from '../components/CabecalhoPerfil.vue'
import AbasPerfil from '../components/AbasPerfil.vue'
// import SecaoSobre from '../components/SecaoSobre.vue'
// import BarraServicos from '../components/BarraServicos.vue'
import AbaAvaliacao from '@/components/AbaAvaliacao.vue'

const route = useRoute()
const router = useRouter()
const usuarioStore = useUsuarioStore()
const abaAtiva = ref('Sobre')

const profissional = computed(() => {
  // Busca o profissional pelo ID da URL na lista fixa
  const encontrado = profissionais.find(item => item.id === Number(route.params.id))
  if (encontrado) return encontrado

  // Se não achou na lista, monta o objeto usando os dados do próprio usuário logado
  // (caso de quando o usuário está vendo o próprio perfil)
  const usuario = usuarioStore.state.usuario || {}
  return {
    id: usuario.id,
    nome: usuario.nome || 'Profissional',
    titulo: usuario.profissao || 'Profissional freelancer',
    foto: usuario.fotoPerfil,
    localizacao: usuario.cidade || 'Localização não informada',
    descricao: usuario.descricao || 'Nenhuma descrição informada.',
    habilidades: usuario.categorias || [],
    nota: 0,
    totalAvaliacoes: 0,
    projetosConcluidos: 0,
    verificado: false,
    experiencias: [],
    avaliacoes: []
  }
})

const servicos = computed(() => profissional.value.services || [])

function pedirOrcamento() {
  // Manda a pessoa pra pagina login se pedir orçamento enquanto nao tiver logado
  if (!usuarioStore.state.usuario) {
    router.push('/login')
    return
  }
  usuarioStore.adicionarContratacao(profissional.value)
  router.push('/dashboard-cliente')
}
</script>

<template>
  <div class="pagina-container">
    <CabecalhoPerfil
      v-bind="profissional"
      @pedir-orcamento="pedirOrcamento"
    />

    <main class="conteudo-principal">
      <div class="cartao-conteudo">
        <AbasPerfil v-model="abaAtiva" />

        <div class="corpo-aba">
          <SecaoSobre
            v-if="abaAtiva === 'Sobre'"
            :descricao="profissional.descricao"
            :habilidades="profissional.habilidades"
            :experiencias="profissional.experiencias"
          />
          <div v-else-if="abaAtiva === 'Portfólio'" class="aba-vazia">
            Não foi encontrado nenhum item de portfólio.
          </div>
          <AbaAvaliacao
            v-else-if="abaAtiva === 'Avaliações'"
            :profissional="profissional"
          />
        </div>
      </div>

      <BarraServicos :services="servicos" @pedir-orcamento="pedirOrcamento" />
    </main>
  </div>
</template>

<style scoped>
.pagina-container {
  min-height: 100vh;
  background: #f8fafc;
  font-family: Arial, sans-serif;
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

.aba-vazia {
  color: #9ca3af;
  text-align: center;
  padding: 32px 0;
  font-size: 14px;
}

@media (max-width: 900px) {
  .conteudo-principal {
    grid-template-columns: 1fr;
  }
}
</style>