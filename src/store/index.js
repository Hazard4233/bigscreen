import Vue from 'vue'
import Vuex from 'vuex'
import ModuleApp from './Modules/ModuleApp'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ModuleApp: ModuleApp
  }
})
