import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ComoFuncionaView from '../views/ComoFuncionaView.vue'
import CategoriasView from '../views/CategoriasView.vue'

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
  ],
})

export default router
