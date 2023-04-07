import localCache from '@/utils/cache'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    // 我们这里不用跳转到 /login，因为如果有登录信息则直接进，没有则重定向至 /login
    // 在下面的 router.beforeEach 导航守卫 写这些吧！
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue'),
    children: [
      {
        path: '/main/correct',
        name: 'correct',
        component: () => import('@/views/main/correct/correct.vue'),
        children: []
      },
      {
        path: '/main/history',
        name: 'history',
        component: () => import('@/views/main/history/history.vue')
      },
      {
        path: '/main/test',
        name: 'test',
        component: () => import('@/views/main/test/test.vue')
      },
      {
        path: '/main/wbList',
        name: 'wbList',
        redirect: '/main/wbList/whiteList',
        component: () => import('@/views/main/wbList/wbList.vue'),
        children: [
          {
            path: '/main/wbList/WhiteList',
            name: 'WhiteList',
            component: () => import('@/views/main/wbList/cpns/whiteList.vue')
          },
          {
            path: '/main/wbList/BlackList',
            name: 'BlackList',
            component: () => import('@/views/main/wbList/cpns/BlackList.vue')
          }
        ]
      },
      {
        path: '/page4',
        component: () => import('@/views/Demo/page4.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

// 判断是否登录，重定向导航的导航守卫

// router.beforeEach((to) => {
//   if (to.path !== '/login') {
//     const token = localCache.getCache('token')
//     if (!token) {
//       return '/login'
//     }
//   }
// })

export default router
