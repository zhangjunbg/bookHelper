import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import study from './modules/study'
import system from './modules/system'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    study,
    system
  },
  getters
})

export default store
