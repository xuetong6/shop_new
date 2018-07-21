import Vue from 'vue'
import Router from 'vue-router'

import Home from 'components/home/home'
import Register from 'components/user/register'
import Login from 'components/user/login'
import NotFoundComponent from 'components/404/404'

Vue.use(Router)

const router = new Router({
  mode: 'history',
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
    },
    {
      path: '*',
      component: NotFoundComponent
    }
  ]
})

/* router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  console.log(next)
}) */

export default router
