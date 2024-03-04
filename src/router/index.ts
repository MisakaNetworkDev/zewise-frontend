import { createRouter, createWebHistory } from 'vue-router'

// pages
import AuthorizationView from '@/views/AuthorizationView.vue'
import UserSettingsView from '@/views/UserSettingsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      component: AuthorizationView
    },
    {
      path: '/settings',
      component: UserSettingsView
    }
  ]
})

export default router
