import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  way: {
    direction: 'north',
    start: {
      stopid: 13,
      name: '新家园路'
    },
    end: {
      stopid: 15,
      name: '佘山地铁站'
    }
  }
}

const mutations = {
  CHANGEWAY (state, way) {
    state.way = way
  }
}

export default new Vuex.Store({
  state,
  mutations
})
