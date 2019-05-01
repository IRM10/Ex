'use strict'

var express = require('express');
var EducationalCareer = require('../controllers/educational-career');

var api= express.Router();

api.post('/guardar-carreraEducativa',EducationalCareer.save);

api.put('/actualizar-carreraEducativa/:id',EducationalCareer.update);

api.delete('/eliminar-carreraEducativa/:id',EducationalCareer.deleting);

api.get('/mostrar-carreraEducativa', EducationalCareer.list)



module.exports = api;