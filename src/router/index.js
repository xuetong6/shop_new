import Vue from 'vue'
import Router from 'vue-router'

import Home from 'components/home/home'
import Register from 'components/user/register'
import Login from 'components/user/login'

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
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/login',
      component: Login
    }

  ]
})

/* router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  console.log(next)
}) */

export default router
