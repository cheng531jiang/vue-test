import Vue from 'vue'
import Vuex from 'vuex'
import order from './modules/order'
import user from './modules/user'

Vue.use(Vuex)

const state = {
}

const mutations = {
}

const actions = {

}

export default new Vuex.Store({
  modules: {
    order,
    user
  },
  state,
  mutations,
  actions
})
