const {Taskssequelize} = require('../../models');
const {ServerError} = require('express-server-error');
const Sequelize = require('sequelize');

module.exports =  {
  async index(req, res) {
    var limit = req.query.perPage || 50;
    var offset = ( req.query.page - 1 ) * req.query.perPage || 0;

    try {
      let tasks = null
      console.log('params', req.query)
      const query = req.query;

        tasks = await Tasks.findAll({
          limit: limit,
          offset: offset
        })

      res.send({items: tasks})
    } catch (err) {
      console.log("error ... "+err);
      res.status(500).send({
        'status': 'error',
        error: 'an error has occured trying to fetch tasks',
        msg: 'an error has occured trying to fetch tasks'
      })
    }
  },
  async show(req, res) {
    console.log("show");
    console.log(req.query);
    var id = req.query.id;
    let task = await Tasks.findOne({
      where:{
        id: id
      }
    })
    if (!task) throw new ServerError(`task with id '${req.query.id}' doesn't exist.`, {
      status: 404
    })
    // console.log("getTaskbyId, task=",fetchedData);
    res.json({
      'status': 'good',
      'items': task
    });
  },

  async update(req, res) {
    try{
      const task = await Tasks.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      res.json({
        'status': 'good',
        'id': req.params.id
      });
    }catch(err){
      console.log(err)
      res.status(500).send({
        error: 'an error has occured trying to update task'
      })
    }
  },

  async create(req, res) {
    try {
      const task = await Tasks.create(req.body)
      res.json({
        'status': 'good',
        'data': task
      });
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'an error has occured trying to create the template'
      })
    }
  }
}
