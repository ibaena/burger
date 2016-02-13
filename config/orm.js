// import
var mysql = require("mysql");
var connection = require("./connection.js");

function burger() {
  //Select all data from Burges Table and show in terminal
  this.get = function(res) {
   connection.acquire(function(err, con) {
     con.query('select * from Burgers', function(err, result) {
       con.release();
       res.send(result);
     });
   });
 };
  //Create New burger
  this.create = function(burger, res) {
   connection.acquire(function(err, con) {
     con.query('insert into Burgers set ?', burger, function(err, result) {
       con.release();
       if (err) {
         res.send({status: 1, message: 'Burger creation failed'});
       } else {
         res.send({status: 0, message: 'Burger created successfully'});
       }
     });
   });
 };
  //Update Entry in table
  this.update = function(burger, res) {
   connection.acquire(function(err, con) {
     con.query('UPDATE Burgers SET ? = true Where ID = ?', [burger, burger.id], function(err, result) {
       con.release();
       if (err) {
         res.send({status: 1, message: 'Burger update failed'});
       } else {
         res.send({status: 0, message: 'Burger updated successfully'});
       }
     });
   });
 };
 //Delete Entry in table
 this.delete = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('delete from Burgers where id = ?', [id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Failed to delete'});
        } else {
          res.send({status: 0, message: 'Deleted successfully'});
        }
      });
    });
  };
}
module.exports = new burger();
