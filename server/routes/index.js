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

router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}));


// router.post('/login', function(req, res, next) {
//   passport.authenticate('local-login', function(err, user, info) {
//     if (err) {
//       return next(err); }
//     if (!user) {
//       res.status(200).json({ success: false, user: user, info: info });
//     }else{
//       req.logIn(user, err => {
//         if (err)  return next(err);
//         //res.cookie('islogined',true,{ expires: req.session.cookie._expires} );
//         res.status(200).json({ success: true, user: user,info: info });
//       });
//     }
//   })(req, res, next);
// });
router.use('/', handleServerErrors());
router.use('/api', isLoggedIn, apiRoutes);
module.exports = router;
