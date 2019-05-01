'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app= express();

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

var person_routes = require('./routes/person');
var academicUnit_routes = require('./routes/academic-unit');
var course_routes = require('./routes/course');
var educationalCareer_routes = require('./routes/educational-career');
var family_routes = require('./routes/family');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/v1',person_routes);
app.use('/v1',academicUnit_routes);
app.use('/v1',course_routes);
app.use('/v1',educationalCareer_routes);
app.use('/v1',family_routes);




module.exports = app;