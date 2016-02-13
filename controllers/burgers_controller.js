var express = require('express');
var router = express.Router();
var burger = require('../config/orm.js');

// middleware that is specific to this router

module.exports = {
  configure: function(app) {
    app.get('/burger/', function(req, res) {
      burger.get(res);
      console.log('Hey Ivan');
    });

    app.post('/burger/', function(req, res) {
      burger.create(req.body, res);
    });

    app.put('/burger/', function(req, res) {
      burger.update(req.body, res);
    });

    app.delete('/burger/:id/', function(req, res) {
      burger.delete(req.params.id, res);
    });
  }
};
