import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/pay/:id',
    component: () => import('@/views/PayAccount.vue')
  },
  {
    path: '/report/:id',
    component: () => import('@/views/ReportPage.vue')
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/AccountPage.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/CalendarPage.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/ReportingPage.vue')
      },
      {
        path: 'tab4',
        component: () => import('@/views/NewsfeedPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
