import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/home/home'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    }
  ]
})

/* router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  console.log(next)
}) */

export default router
