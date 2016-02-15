var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

//get route -> index
router.get('/index', function(req,res) {
	burger.findAllMembers(function(burger_data){
		res.render('index', {burger_data});
	});
});

//post route -> back to index
router.post('/create', function(req, res) {
	burger.addOneMemeber(req.body.burger_name, function(result){
		console.log(result);
		res.redirect('/index');
	});
});

//put route -> back to index
router.put('/update', function(req,res){
	burger.updateOneMember(req.body.id, function(result){
		console.log(result);
		res.redirect('/index');
	});
});

//delete route -> back to index
router.delete('/delete', function(req,res){
	burger.removeOneMember(req.body.id, function(result){
		console.log(result);
		res.redirect('/index');
	});
});

module.exports = router;
