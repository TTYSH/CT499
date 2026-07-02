import { createRouter, createWebHistory } from 'vue-router'
import UserLayout from '../layouts/UserLayout.vue'
import homePage from '../pages/User/HomePage.vue'
import IntroductionPage from '../pages/User/IntroductionPage.vue'
import CollectionPage from '../pages/User/CollectionPage.vue'
import AccountPage from '../pages/User/AccountPage.vue'
import BookDetail from '../components/User/BookDetail.vue'
import AdminLayout from '../layouts/AdminLayout.vue'
import BookManager from '../pages/Admin/BookManager.vue'
import RequestPage from '../pages/Admin/RequestPage.vue'
import ReadersPage from '../pages/Admin/ReadersPage.vue'
import LedgerPage from '../pages/Admin/LedgerPage.vue'
import AuthorPage from '../pages/Admin/AuthorPage.vue'
import DashboardPage from '../pages/Admin/DashboardPage.vue'
import LoginPage from '@/pages/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/',
      component: UserLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: homePage,
        },
        {
          path: 'introduction',
          name: 'introduction',
          component: IntroductionPage,
        },
        {
          path: 'collection',
          name: 'collection',
          component: CollectionPage,
        },
        {
          path: 'account',
          name: 'account',
          component: AccountPage,
        },
        {
          path: 'book',
          name: 'book-detail',
          component: BookDetail,
        }
      ]
    },
    {
      path: '/admin',
      component: AdminLayout,
      children: [
        {
          path: 'books',
          name: 'admin-books',
          component: BookManager,
        },
        {
          path: 'requests',
          name: 'admin-requests',
          component: RequestPage,
        },
        {
          path: 'readers',
          name: 'admin-readers',
          component: ReadersPage,
        },
        {
          path: 'ledger',
          name: 'admin-ledger',
          component: LedgerPage,
        },
        {
          path: 'authors',
          name: 'admin-authors',
          component: AuthorPage,
        },
        {
          path: '',
          name: 'admin-dashboard',
          component: DashboardPage,
        }
      ]
    }
  ],
})

export default router
