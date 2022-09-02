import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import AuthView from './views/AuthView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: AuthView},
    {path: '/about', component: () => import('./views/AboutView.vue')},
  ]
})

const vueApp = createApp(App)
const pinia = createPinia()

vueApp.use(router)
vueApp.use(pinia)
vueApp.mount('#app')
