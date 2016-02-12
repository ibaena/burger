// import
var mysql = require("mysql");
var dBconn = require("./connection.js");

//Select all data from Burges Table
dBconn.query('SELECT * FROM Burgers',function(err,res){
  if(err) throw err;

  console.log('Data received from Db:\n');
  console.log(res);
});
//Create New burger
//var newBurger = { burger_name: 'Bacon Burger', devoured: false };
dBconn.query('INSERT INTO Burgers SET ?', newBurger, function(err,res){
  if(err) throw err;

  console.log('Last insert ID:', res);
});
