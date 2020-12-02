import Vue from 'vue'

export const SET_LIST_USER = 'SET_LIST_USER'

export const state = () => {
  return {
    listUserInfo: []
  }
}

export const mutations = {
  [SET_LIST_USER]: function (state, listUserInfo) {
    state.listUserInfo = listUserInfo
  }
}

export const actions = {
  setListUserInfo: function ({ commit }, newstate) {
    commit(SET_LIST_USER, newstate)
  }
}

export const getters = {
  getListUserInfo (state) {
    return state.listUserInfo
  }
}
