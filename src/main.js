import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VModal from 'vue-js-modal'
Vue.use(VModal)


Vue.config.productionTip = false

import {auth} from './firebase'

auth.onAuthStateChanged(user=>{
  if(user) {
    store.dispatch("detectarUsuario",user)
  }
  else{
    store.dispatch("detectarUsuario",user)
  }

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')

  
})
