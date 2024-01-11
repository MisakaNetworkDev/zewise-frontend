import { createRouter, createWebHistory } from 'vue-router'

// pages
import AuthorizationView from '@/views/AuthorizationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AuthorizationView
    },
  ]
})

export default router
