import Vue from 'vue'

export const SET_USER_INFO = 'SET_USER_INFO'

export const state = () => {
  return {
    userInfo: {}
  }
}

export const mutations = {
  [SET_USER_INFO]: function (state, userInfo) {
    state.userInfo = userInfo
  }
}

export const actions = {
  setUserInfo: function ({ commit }, newstate) {
    commit(SET_USER_INFO, newstate)
  }
}

export const getters = {
  userInfo (state) {
    return state.userInfo
  }
}
