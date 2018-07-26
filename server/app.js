var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var session    = require('express-session');
var passport   = require('passport')
var resHeader =  {
  origin: "http://localhost:8080",
  credentials: true
}

var routes = require('./routes');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

// app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use(cors(resHeader));

///这是后来加的，为了创建session做身份验证
var config = require('./config/config.js')
const env = app.get('env') || 'development'
var sess = config[env].sess
var sessionStore = null
  //用MemoryStore的配置
var MemoryStore = require('memorystore')(session);
sessionStore = new MemoryStore(config.MemoryOptions);

sess.store = sessionStore;
///

app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/',routes);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  });
});


module.exports = app;
