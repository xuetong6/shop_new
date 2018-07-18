import * as types from './mutation-types'
export const changeNum = function ({commit, state}, num) {
  commit(types.TEST, num)
}
