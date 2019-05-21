'use strict'

var express = require('express');
var Instructor = require('../controllers/instructor');

var api= express.Router();

api.post('/guardar-instructor',Instructor.save);

api.delete('/eliminar-instructor/:id',Instructor.deleting);

api.get('/mostrar-instructor', Instructor.list)



module.exports = api;