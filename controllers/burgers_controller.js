var express = require('express');
var router = express.Router();
var burger = require('../config/orm.js');

// middleware that is specific to this router


    router.get('/burger/', function(req, res) {
        burger.get(res);
      res.render('index', {
           title : 'Eat Da Burger!',
           layout : 'main'
    });
    });
    router.post('/burger/', function(req, res) {
      burger.create(req.body, res);
      console.log(req.body);
    });

    router.put('/burger/', function(req, res) {
      burger.update(req.body, res);
    });

    router.delete('/burger/:id/', function(req, res) {
      burger.delete(req.params.id, res);
    });
module.exports = router;
