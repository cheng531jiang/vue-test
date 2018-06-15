import axios from '../api'

const state = {
  user: null,
}

const getters = {
  // Filtering currentUser
  currentUser: state => {
    if (state.user != null) {
      return state.user
    } else {
      var user = localStorage.getItem("user");
      return JSON.parse(user);
    }
  },
  email: (state, getters) => {
    var user = getters.currentUser;
    if(user != null){
      return user.email;
    }
    return null;
  },
  getState: state => {
    return state
  },
  getUserRoleName: state => {
    let roleName = { "allRoleName":[]};
    let idenList = ["reader","editor"];
    let levelList = ["validator_level_1","validator_level_2","validator_level_3","validator_level_4"];
    let userObj = {};
    if (state.user){
			userObj = state.user;
    }else {
      userObj = JSON.parse(localStorage.getItem("user"));
    }
   	if (userObj) {
   		userObj.roles.map((role)=>{
	    	roleName['allRoleName'].push(role.role_name);
	    	if( idenList.indexOf(role.role_name) > -1) roleName['idenRoleName'] = role.role_name;
	    	if( levelList.indexOf(role.role_name) > -1) roleName['levelRoleName'] = role.role_name;
	    });
   	}
    return roleName;
  },
  getUserRightName: ( state ) =>{
  	let rightName = [];
  	let userObj = {};
  	if (state.user){
			userObj = state.user;
    }else {
      userObj = JSON.parse(localStorage.getItem("user"));
    }
   	if (userObj) {
   		userObj.rights.map((right)=>{
	    	rightName.push(right.right_name);
	    });
   	}
   	return rightName;
  }
}

const
  mutations = {

    updateData(state, message) {
      state.user[message.name] = message.value;
    },

    getLocalUser(state) {
      state.user = localStorage.getItem('user')
    },

    setUser(state, payload) {
      state.user = payload.user
      state.islogined = payload.success
      state.errinfo = payload.info
      localStorage.setItem('user', JSON.stringify(payload.user))
    },

    logout (state) {
      state.user = null
      state.islogined = false
      state.errinfo = null
      state.logoutState = true
      localStorage.clear()
      //localStorage.removeItem('user')
      clearCookie()
    },

    CATALOG_FETCH_USER_FAILURE(state, error) {
      console.log('fetch user error:');
      console.log(error);
    }
  }

const actions = {
  async login({state, commit}, params) {
    try {
      let {data} = await axios.post('/login', params.data)
      commit('setUser', data)
    } catch (error) {
      commit('CATALOG_FETCH_USER_FAILURE', error)
    }
  },
  async logout({state, commit}, params) {
    let {data} = await axios.get('/logout'); //注销服务器端数据
    if (data.success == true) {
      commit('logout');                        //注销本地数据
    }
  }
}


export default {
  state,
  getters,
  mutations,
  actions
}
