var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

module.exports = function(passport) {

  passport.serializeUser(function(user, done) {
    console.log("serialize usr id=",user.id);
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    done(null,user)
  });
  //
  // passport.use('local-signup', new LocalStrategy({
  //   usernameField: 'email',
  //   passwordField: 'password',
  //   passReqToCallback: true,
  // },
  // function(req, email, password, done) {
  //   process.nextTick(function() {
  //     User.findOne({ 'local.email':  email }, function(err, user) {
  //       if (err)
  //           return done(err);
  //       if (user) {
  //         return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
  //       } else {
  //         var newUser = new User();
  //         newUser.local.email = email;
  //         newUser.local.password = newUser.generateHash(password);
  //         newUser.save(function(err) {
  //           if (err)
  //             throw err;
  //           return done(null, newUser);
  //         });
  //       }
  //     });
  //   });
  // }));

  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  function(req, email, password, done) {
    // console.log("test1");
    // User.findOne({ 'local.email':  email }, function(err, user) {
    //   if (err)
    //       return done(err);
    //   if (!user)
    //       return done(null, false, req.flash('loginMessage', 'No user found.'));
    //   if (!user.validPassword(password))
    //       return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
    //   return done(null, user);
    // });
    // console.log('sessionId=',req.sessionId);
    var currentSsid = req.sessionId;
    var store= req.sessionStore;
    store.get("123", (error, oldSession) => {
      console.log("old session=", oldSession);
    });
    // console.log("email=",email);
    if (email=="abcdef"){
      console.log("if1");
      return done(null,{"id":"1","username":"test","email":email,"password":password},{message: '查询用户成功'});
    }
    else{
      console.log("else1");
      return done(null);
    }

  }));
};
