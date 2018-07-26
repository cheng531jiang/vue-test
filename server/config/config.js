const path = require('path')

const hour = 12 * 60 * 60 * 1000;
const expireTime = new Date(Date.now() + hour);
const sessionKey = 'cheng-test'
const sessionSecret = 'b03108db!#201765f2_asien'

module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./db.development.sqlite",
    sess: {
      key: sessionKey,
      secret: sessionSecret,
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: expireTime,
        maxAge: hour,
        httpOnly: false
      }
    }
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:",
    sess: {
      key: sessionKey,
      secret: sessionSecret,
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: expireTime,
        maxAge: hour,
        httpOnly: false
      }
    }
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql',
    sess: {
      key: sessionKey,
      secret: sessionSecret,
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: expireTime,
        maxAge: hour,
        httpOnly: false
      }
    }
  },
  sessionStore: 'MemoryStore',
  MemoryOptions: {
    checkPeriod: 12*60*60*1000  // prune expired entries every 24h
  }
};
