import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import elerenderheader from '@/components/eleRenderHeader/elerenderheader'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      // redirect: '/testvueis', //进首页默认重定向到vue的is特性页面
      component: home,
      children: [
        {
          path: '/elerenderheader',
          name: 'elerenderheader',
          component: elerenderheader
        },
        {
          path: '/testvueis',
          name: 'testvueis',
          component: () => import('@/components/vue/testvueis/testvueis.vue')
        },
        {
          path: '/mixins',
          name: 'mixins',
          component: () => import('@/components/vue/mixins/mixins.vue')
        },
        {
          path: '/css3aimation&transition',
          name: 'css3aimation&transition',
          component: () => import('@/components/cssanimatran/css3ani&tran')
        },
        {
          path: '/tuopuecharts',
          name: 'tuopuecharts',
          component: () => import('@/components/echarts/tuopuecharts')
        },
      ]
    },
  ]
})
