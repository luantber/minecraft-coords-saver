import Vue from 'vue'
import VueRouter from 'vue-router'
import Land from '../views/Land.vue'
import {firebase } from "../firebase"
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Land',
    component: Land,
    beforeEnter: (to, from, next) => {
      if ( firebase.auth().currentUser  ) next({
        path:"/worlds"
      })
      else
        next()
    }
  },

  {
    path: '/worlds',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/worlds/:id',
    name: 'World',
    component: () => import('../views/World.vue'),
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if ( ! firebase.auth().currentUser  ) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})


export default router
