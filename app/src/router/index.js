import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homeview',
      component: HomeView,
    },
    {
      path: '/borough',
      name: 'borough',
      component: () => import('../views/BoroughView.vue'),
    },
    {
      path: '/graduation',
      name: 'graduation',
      component: () => import('../views/GraduationView.vue'),
    },
  ],
})

export default router
