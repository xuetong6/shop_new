// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// import iView from 'iview'
// import 'iview/dist/styles/iview.css'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

// 按需加载
import { Carousel, CarouselItem, Form, FormItem, Input, Button, Notification, Checkbox } from 'element-ui'

/* 导入vuex store */
import store from './store'

/* 导入scss中的reset, 重置样式 */
import 'common/scss/index.scss'

Vue.config.productionTip = false

// 按需加载
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Checkbox)
Vue.prototype.$notify = Notification
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
