var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//Set Handlebar engine and defaut layout
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//no idea
app.use(methodOverride('X-HTTP-Method-Override'));

//Body-parser initialized
app.use(bodyParser.urlencoded({ extended: false }));
