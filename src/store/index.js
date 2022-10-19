import { createStore } from 'vuex'

export default createStore({
  state: {
    email: null,
    password: null,
  },
  mutations: {
    addData(state, payload) {
      state.email = payload.email
      state.password = payload.password
    }
  },
  actions: {
  },
  modules: {
  },
})
