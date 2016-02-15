// import
var mysql = require("mysql");
var connection = require("./connection.js");

var orm = {
  //Select all data from Burges Table and show in termina
  selectAll: function(cb) {
   connection.acquire(function(err, con) {
     con.query('select * from Burgers', function(err, result) {
       con.release();
       cb(result);
     });
   });
 },
  //Create New burger
  insertRow: function(input, cb) {
   connection.acquire(function(err, con) {
     con.query('insert into Burgers set ?', input, function(err, result) {
       con.release();
       if (err) {
         res.send({status: 1, message: 'Burger creation failed'});
       } else {
         cb(result);
         console.log('{status: 0, message:Burger created successfully}');
       }
     });
   });
 },
  //Update Entry in table
  updateOne: function(idInput, cb) {
   connection.acquire(function(err, con) {
     con.query('UPDATE Burgers SET devoured = true Where ID = ?', [idInput], function(err, result) {
       con.release();
       if (err) {
         res.send({status: 1, message: 'Burger update failed'});

       } else {
         cb(result);
       }
     });
   });
 },
 //Delete Entry in table
 deleteOne: function(idInput, cb) {
    connection.acquire(function(err, con) {
      con.query('delete from Burgers where id = ?', [idInput], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Failed to delete'});
        } else {
          cb(result);
        }
      });
    });
  },
};
module.exports = new burger();
