var mysql = require("mysql");

// First you need to create a connection to the db
var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@pril2488",
  database: "burgers_db"
});

conn.connect(function(err,res){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Data received from Db:\n');
});

module.exports = conn;
