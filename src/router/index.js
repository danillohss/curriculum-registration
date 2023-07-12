import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CadastrarCurriculo from '../components/CadastrarCurriculo.vue'
import MeusCurriculos from '../components/MeusCurriculos.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Cadastrar-Curriculo',
    name: 'Cadastrar-Curriculo',
    component: CadastrarCurriculo
  },
  {
    path: '/Meus-Curriculos',
    name: 'meus-curriculos',
    component: MeusCurriculos,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
