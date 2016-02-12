// import
var mysql = require("mysql");
var dBconn = require("./connection.js");

//Select all data from Burges Table and show in terminal
dBconn.query('SELECT * FROM Burgers', function(err, res) {
  if (err) throw err;

  console.log('Data received from Db:\n');
  console.log(res);
});

//Create New burger
//var newBurger = { burger_name: 'Bacon Burger', devoured: false };
dBconn.query('INSERT INTO Burgers SET ?', newBurger, function(err,res){
  if(err) throw err;

  console.log('Last insert ID:', res);
});

//Change devoured status
var bool = true;
dBconn.query(
  'UPDATE Burgers SET devoured = ? Where ID = ?', [true, 2],
  function(err, result) {
    if (err) throw err;

    console.log('Changed ' + result.changedRows + ' rows');
  }
);

module.exports = dBconn;
