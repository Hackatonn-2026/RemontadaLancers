<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// import { useUsuarioStore } from '@/stores/usuario'
import { profissionais } from '@/data/profissionais.js'
// import ProfileHeader from '../components/CabecalhoPerfil.vue'
import ProfileTabs from '../components/AbasPerfil.vue'
// import AboutSection from '../components/SecaoSobre.vue'
//import ServicesSidebar from '../components/BarraServicos.vue'
import AbaAvaliacao from '@/components/AbaAvaliacao.vue'

const route = useRoute()
const router = useRouter()
const usuarioStore = useUsuarioStore()
const activeTab = ref('Sobre')

const profissional = computed(() => {
  // Busca o profissional pelo ID da URL na lista fixa
  const encontrado = profissionais.find(item => item.id === Number(route.params.id))
  if (encontrado) return encontrado

  // Se não achou na lista, monta o objeto usando os dados do próprio usuário logado
  // (caso de quando o usuário está vendo o próprio perfil)
  const usuario = usuarioStore.state.usuario || {}
  return {
    id: usuario.id,
    name: usuario.nome || 'Profissional',
    title: usuario.profissao || 'Profissional freelancer',
    avatar: usuario.fotoPerfil,
    location: usuario.cidade || 'Localização não informada',
    bio: usuario.descricao || 'Nenhuma descrição informada.',
    skills: usuario.categorias || [],
    rating: 0,
    reviewsCount: 0,
    completedProjects: 0,
    verified: false,
    experiences: [],
    reviews: []
  }
})

const servicos = computed(() => profissional.value.services || [])

function handleRequestQuote() {
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
  <div class="page-container">
    <ProfileHeader
      v-bind="profissional"
      reviews-count="profissional.reviewsCount"
      completed-projects="profissional.completedProjects"
      @request-quote="handleRequestQuote"
    />

    <main class="main-content">
      <div class="content-card">
        <ProfileTabs v-model="activeTab" />

        <div class="tab-body">
          <AboutSection
            v-if="activeTab === 'Sobre'"
            :bio="profissional.bio"
            :skills="profissional.skills"
            :experiences="profissional.experiences"
          />
          <div v-else-if="activeTab === 'Portfólio'" class="empty-tab">
            Não foi encontrado nenhum item de portfólio.
          </div>
          <AbaAvaliacao
            v-else-if="activeTab === 'Avaliações'"
            :profissional="profissional"
          />
        </div>
      </div>

      <ServicesSidebar :services="servicos" @request-quote="handleRequestQuote" />
    </main>
  </div>
</template>

<style scoped>
.page-container {
  min-height: 100vh;
  background: #f8fafc;
  font-family: Arial, sans-serif;
}

.main-content {
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 32px;
  padding: 32px 24px;
}

.content-card {
  background: #fff;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  padding: 32px;
}

.tab-body {
  padding-top: 24px;
}

.empty-tab {
  color: #9ca3af;
  text-align: center;
  padding: 32px 0;
  font-size: 14px;
}

@media (max-width: 900px) {
  .main-content {
    grid-template-columns: 1fr;
  }
}
</style>