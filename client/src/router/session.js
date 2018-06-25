import Cookies from 'js-cookie'

const COOKIE_SID = 'cheng-test'

var util = {}

var sessionExist = function () {
  var sid = Cookies.get(COOKIE_SID);
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
