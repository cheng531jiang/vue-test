import Cookies from 'js-cookie'

const COOKIE_SID = 'cheng-test'

var util = {}

var sessionExist = function () {
  console.log("COOKIE_SID=",COOKIE_SID);
  var sid = Cookies.get(COOKIE_SID);
  console.log("sid=",sid);
  return typeof sid !== 'undefined' & sid != null
  // return true;
}

var clearCookie = function () {
  Cookies.remove(COOKIE_SID)
}

var logout = function (router) {
  clearCookie()
  router.push({path: '/login'})
}

var checkLogin = (to, from, next) => {
  if (!sessionExist()) {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  } else {
    if (to.path === '/login') next('/')
    else next()
  }
}

export {
  clearCookie,
  logout,
  sessionExist,
  checkLogin
}
