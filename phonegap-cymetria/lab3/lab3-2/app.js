#!/usr/bin/env node
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cons = require('consolidate');

var app = express();

var debug = require('debug')('lab3-2');

app.set('port', process.env.PORT || 3030);
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended : true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
	res.render('index', {'name' : 'Test App'});
});

app.post('/message', function(req, res){
	var data = {
		name : "Alejandro",
		age : "18",
		id : "80912070" 
	}

	console.log(req.body);

	// console.log(req.headers, data);
	res.json(data);
});

var server = app.listen(app.get('port'), function(){
	debug('Express esta escuchando en el puerto ' + server.address().port);
});