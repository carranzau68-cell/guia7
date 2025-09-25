import { createRouter, createWebHistory } from 'vue-router'
import AnimalesList from '../views/AnimalesList.vue'
import CalculadoraView from '../views/CalculadoraView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  { path: '/', name: 'animal', component: AnimalesList },
  { path: '/calculadora', name: 'calculadora', component: CalculadoraView },
  {
    path: '/about',
    name: 'about',
    component: AboutView
    // Si deseas lazy-load, usa:
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
