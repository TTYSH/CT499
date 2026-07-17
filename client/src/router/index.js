import { createRouter, createWebHistory } from 'vue-router'
import UserLayout from '../layouts/UserLayout.vue'
import homePage from '../pages/User/HomePage.vue'
import ContactPage from '@/pages/User/ContactPage.vue'
import CollectionPage from '../pages/User/CollectionPage.vue'
import AccountPage from '../pages/User/AccountPage.vue'
import BookDetail from '../components/User/BookDetail.vue'
import AdminLayout from '../layouts/AdminLayout.vue'
import BookManager from '../pages/Admin/BookManager.vue'
import RequestPage from '../pages/Admin/RequestPage.vue'
import ReadersPage from '../pages/Admin/ReadersPage.vue'
import LedgerPage from '../pages/Admin/LedgerPage.vue'
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
          path: 'contact',
          name: 'contact',
          component: ContactPage,
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
          meta: { requiresAuth: true }
        },
        {
          path: 'book/:id',
          name: 'book-detail',
          component: BookDetail,
        }
      ]
    },
    {
      path: '/admin',
      component: AdminLayout,
      meta: { requiresAuth: true, requiresAdmin: true },
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
          path: '',
          name: 'admin-dashboard',
          component: DashboardPage,
        }
      ]
    }
  ],
})

// router.beforeEach((to, from, next) => {
//   const loggedInUser = localStorage.getItem('user')
//   let user = null
//   try {
//     user = loggedInUser ? JSON.parse(loggedInUser) : null
//   } catch (error) {
//     console.error('Lỗi khi đọc dữ liệu user:', error)
//     localStorage.removeItem('user')
//   }

//   if (to.meta.requiresAuth && !user) {
//     return next('/login')
//   }

//   if (to.meta.requiresAdmin && user && user.LoaiTaiKhoan !== 'QuanTri') {
//     // Nếu có role nhưng không phải admin mà vào trang admin -> về trang chủ
//     return next('/')
//   }

//   // Nếu user đã đăng nhập mà vào lại trang login, redirect về trang chủ
//   if (to.name === 'login' && user) {
//     if (user.LoaiTaiKhoan === 'QuanTri') {
//       return next('/admin')
//     }
//     return next('/')
//   }

//   next()
// })

export default router
