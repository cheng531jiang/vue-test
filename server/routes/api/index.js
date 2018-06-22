const express = require('express')
const {handleServerErrors, ServerError} = require('express-server-error');

const taskRoute = require('./task.js');

const router = express.Router()

router.route('/task')
   .get(taskRoute.index)
   .put(taskRoute.create)

router.route('/task/:id')
  .get(taskRoute.show)
  .post(taskRoute.update)

module.exports = router
