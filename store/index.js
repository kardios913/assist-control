import Vue from 'vue'

export const SET_LIST_USER = 'SET_LIST_USER'
export const SET_LIST_EVENTO = 'SET_LIST_EVENTO'

export const state = () => {
  return {
    listUserInfo: [],
    listEvent: []
  }
}

export const mutations = {
  [SET_LIST_USER]: function (state, listUserInfo) {
    state.listUserInfo = listUserInfo
  },
  [SET_LIST_EVENTO]: function (state, listEvent) {
    state.listEvent = listEvent
  }
}

export const actions = {
  setListUserInfo: function ({ commit }, newstate) {
    commit(SET_LIST_USER, newstate)
  },
  setListEvent: function ({ commit }, newstate) {
    commit(SET_LIST_EVENTO, newstate)
  }
}

export const getters = {
  getListUserInfo (state) {
    return state.listUserInfo
  },
  getListEvent (state) {
    return state.listEvent
  }
}
