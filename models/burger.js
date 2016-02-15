var orm = require('../config/orm.js');

var super_clubs = {
	findAllBurgers: function(cb) {
		orm.selectAll('burger', function(res){
			cb(res)
		});
	},
	addOneBurger: function(nameInput,cb) {
		orm.insertOne('burger', nameInput, 1, cb);
	},
	updateOneBurger: function(inputId, cb){
		orm.updateOne('burger', 1, inputId, cb);
	},
	removeOneBurger: function(inputId, cb) {
		orm.deleteOne('burger', 1, inputId, cb);
	}
};

module.exports = burger;
