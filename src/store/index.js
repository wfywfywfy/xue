import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: null,
    token: ''
  },
  mutations: {
    setUsers(state, aa) {
      state.users = aa

    },
    setToken(state, aa) {
      state.token = aa

    }
  },
  actions: {
    setUsersAction({
      commit
    }, cc) {
      commit('setUsers', cc)
    },
    setTokenAction({
      commit
    }, cc) {
      commit('setToken', cc)
    }
  },
  modules: {}
})