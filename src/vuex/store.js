import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  way: 'north'
}

const mutations = {
  CHANGEWAY (state, way) {
    console.log('mutations:' + way)
    state.way = way
  }
}

export default new Vuex.Store({
  state,
  mutations
})
