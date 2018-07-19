import Vue from 'vue'
import Router from 'vue-router'

import Home from 'components/home/home'
import Register from 'components/user/register'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
