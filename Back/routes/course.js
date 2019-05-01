'use strict'

var express = require('express');
var CourseController = require('../controllers/course');

var api= express.Router();

api.post('/guardar-curso',CourseController.save);

api.put('/actualizar-curso/:id',CourseController.update);

api.delete('/eliminar-curso/:id',CourseController.deleting);

api.get('/mostrar-curso', CourseController.list)



module.exports = api;