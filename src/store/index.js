import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from 'state'
import mutations from 'mutations'

Vue.use(Vuex)

const isDebugMode = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  /* 开发环境下开启严格模式, 生产环境不要开启, 会大大降低性能 */
  strict: isDebugMode
})
