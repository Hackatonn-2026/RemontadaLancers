import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ComoFuncionaView from '../views/ComoFuncionaView.vue'
import CategoriasView from '../views/CategoriasView.vue'
import LoginView from '../views/LoginView.vue'
import CadastroView from '../views/CadastroView.vue'
import PerfilFreelancerView from '@/views/PerfilFreelancerView.vue'
import PerfilUsuarioView from '../views/PerfilUsuarioView.vue'
import SobreView from '../views/SobreView.vue'
import SuporteView from '../views/SuporteView.vue'
import EditarPerfilView from '../views/EditarPerfilView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/como-funciona',
      name: 'como-funciona',
      component: ComoFuncionaView,
    },
    {
      path: '/categorias',
      name: 'categorias',
      component: CategoriasView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: CadastroView,
    },
    {
      path: '/perfil-freelancer/:id',
      name: 'perfil-freelancer',
      component: PerfilFreelancerView,
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: PerfilUsuarioView,
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: SobreView,
    },
    {
      path: '/suporte',
      name: 'suporte',
      component: SuporteView,
    },
    {
 editar-perfill
      path: '/editar-perfil',
      name: 'editar-perfil',
      component: EditarPerfilView,
=======
      path: '/buscar',
      name: 'buscar',
      component: BuscasProfissionais,
    },
    {
      path: '/usuario-freelancer/:id',
      name: 'usuario-freelancer',
      component: UsuarioFreelancerView,
 editar-freelancer
    }
  ],
})

export default router