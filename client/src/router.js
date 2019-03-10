import Vue from 'vue'
import Router from 'vue-router'

import Nofind from './views/404'
import Index from './views/Index.vue'
import Home from './views/Home'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '*', name: '/404', component: Nofind },
    { path: '/', redirect: '/index' },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        { path: '', component: Home },
      ]
    },
  ]
})

export default router;