import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import BasePage from '../views/BasePage/BasePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'index/'
  },
  {
    path: '/index/',
    component: BasePage,
    children: [
      {
        path: '',
        redirect: 'home'
      },
      {
        path: 'home',
        component: () => import('@/views/HomePage/HomePage.vue')
      },
      {
        path: 'profile',
        component: () => import('@/views/ProfilePage/ProfilePage.vue')
      },
      {
        path: 'sync',
        component: () => import('@/views/SyncPage/SyncPage.vue')
      },
      {
        path: 'transaction',
        component: () => import('@/views/TransactionPage/TransactionPage.vue')
      },
      {
        path: 'wallet',
        component: () => import('@/views/WalletPage/WalletPage.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
