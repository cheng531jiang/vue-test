
const state = {
  orders:[],
  currentOrder:{"id":"123"}
}

const getters = {
  // Filtering currentUser
  currentOrder: state => {
    return state.currentOrder;
  },
  // getState: state => {
  //   return state
  // }
}

const
  mutations = {

  }

const actions = {

}


export default {
  state,
  getters,
  mutations,
  actions
}
