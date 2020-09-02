import Vue from 'vue'
import VueRouter from 'vue-router'
import Land from '../views/Land.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Land',
    component: Land
  },

  {
    path: '/worlds',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/worlds/:id',
    name: 'World',
    component: () => import('../views/World.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
