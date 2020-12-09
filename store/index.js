import Vue from 'vue'

export const SET_LIST_USER = 'SET_LIST_USER'
export const SET_LIST_EVENTO = 'SET_LIST_EVENTO'
export const SET_ASISTENCIAS = 'SET_ASISTENCIAS'

export const state = () => {
  return {
    listUserInfo: [
      {
        id: 0,
        nombre: 'Astrid',
        apellido: 'Caicedo',
        email: 'a@gmail.com',
        documento: '1321324',
        codigo: '1151472',
        etiqueta: '256'
      },
      {
        id: 1,
        nombre: 'Edward',
        apellido: 'Camargo',
        email: 'e@gmail.com',
        documento: '1321324',
        codigo: '1151094',
        etiqueta: '260'
      }
    ],
    listEvent: [
      {
        id: 0,
        nombre: 'Seminario Electrónica',
        fechaInicio: '02/12/2020',
        fechaFin: '02/12/2020',
        encargado: 0,
        lugar: 'Auditorio Eustorgio Colmenares',
        aforo: 10
      }
    ],
    asistencias: []
  }
}

export const mutations = {
  [SET_LIST_USER]: function (state, listUserInfo) {
    state.listUserInfo = listUserInfo
  },
  [SET_LIST_EVENTO]: function (state, listEvent) {
    state.listEvent = listEvent
  },
  [SET_ASISTENCIAS]: function (state, asistencias) {
    state.asistencias = asistencias
  }
}

export const actions = {
  setListUserInfo: function ({ commit }, newstate) {
    commit(SET_LIST_USER, newstate)
  },
  setListEvent: function ({ commit }, newstate) {
    commit(SET_LIST_EVENTO, newstate)
  },
  setAsistencias: function ({ commit }, newstate) {
    commit(SET_ASISTENCIAS, newstate)
  }
}

export const getters = {
  getListUserInfo (state) {
    return state.listUserInfo
  },
  getListEvent (state) {
    return state.listEvent
  },
  getAsistencias (state) {
    return state.asistencias
  }
}
