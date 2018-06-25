import * as axios from 'axios'

 function createAxios(withAuth) {
    let options = {}
    if(withAuth){
      options = {
        withCredentials: true
      }
    }else{
      options = {
        withCredentials: false
      }
    }

    // if it's the server build, request from the local IP
    if (process.env.NODE_ENV === 'development') {
      options.baseURL = 'http://localhost:8081/'
    } else {
      options.baseURL = '/'
    }
    console.log('create axios ', withAuth, options)
    return axios.create(options)
}
var api = createAxios(true);

api.interceptors.response.use(response => {
  return response
}, error => {
  if (error.response.status === 401) {
    // logout(router)
    alert("user is logged out");
  } else {
    return Promise.reject(error)
    // alert(error);
  }
})

export default api;
