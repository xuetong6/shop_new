import * as types from './mutation-types'
const mutations = {
  [types.TEST] (state, num) {
    state.num = num
  }
}

export default mutations
