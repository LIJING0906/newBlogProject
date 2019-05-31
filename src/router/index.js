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
          meta: {
            active: '/enderheader'
          },
          component: elerenderheader
        },
        {
          path: '/testvueis',
          name: 'testvueis',
          meta: {
            active: '/testvueis'
          },
          component: () => import('@/components/vue/testvueis/testvueis.vue')
        },
        {
          path: '/mixins',
          name: 'mixins',
          meta: {
            active: '/mixins'
          },
          component: () => import('@/components/vue/mixins/mixins.vue')
        },
        {
          path: '/directive',
          name: 'directive',
          meta: {
            active: '/directive'
          },
          component: () => import('@/components/vue/directive/stickyBottom.vue')
        },
        {
          path: '/css3aimation&transition',
          name: 'css3aimation&transition',
          meta: {
            active: '/css3ai&transition'
          },
          component: () => import('@/components/cssanimatran/css3ani&tran')
        },
        {
          path: '/tuopuecharts',
          name: 'tuopuecharts',
          meta: {
            active: '/patuopuecharts'
          },
          component: () => import('@/components/echarts/tuopuecharts')
        },
      ]
    },
  ]
})
