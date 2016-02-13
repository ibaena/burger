var express = require('express');
var app = express();                              // create our app w/ express
var mysql = require('mysql');                     // mysql for mysqldb
var exphbs = require('express-handlebars');       //handlesbars engine
var bodyParser = require('body-parser');          // pull information from HTML POST
var morgan = require('morgan');                   // log requests to the console (express4)
var methodOverride = require('method-override');  // simulate DELETE and PUT
var connection = require('./config/connection.js');
var routes = require('./controllers/burgers_controller.js');

//Set Handlebar engine and defaut layout
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(methodOverride('X-HTTP-Method-Override'));
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json


connection.init();
routes.configure(app);
// listen (start app with node server.js)
var server = app.listen(8000, function() {
  console.log('Server listening on port ' + server.address().port);
});
