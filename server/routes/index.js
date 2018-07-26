var express = require('express');
var passport = require('passport');
var router  = express.Router();

var apiRoutes = require('./api');
const {handleServerErrors} = require('express-server-error');


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
      return next();
  res.redirect('/');
}

// router.post('/login', passport.authenticate('local-login', {
//   successRedirect: '/',
//   failureRedirect: '/login',
//   failureFlash: true
// }));


router.post('/login', function(req, res, next) {
  console.log("login");
  passport.authenticate('local-login', function(err, user, info) {
    user={"name":"abc","id":"123"}
    if (err) {
      return next(err); }
    if (!user) {
      res.status(200).json({ success: false, user: user, info: info });
    }else{
      console.log('else3');
      req.logIn(user, err => {

        if (err)  {console.log(err);return next(err);}
        //res.cookie('islogined',true,{ expires: req.session.cookie._expires} );
        console.log("user=",user);
        console.log("info=",info);
        res.status(200).json({ success: true, user: user,info: info });
      });
    }
  })(req, res, next);
});
router.use('/', handleServerErrors());
router.use('/api', isLoggedIn, apiRoutes);
module.exports = router;
