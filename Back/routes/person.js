'use strict'

var express = require('express');
var PersonController = require('../controllers/person');

var api= express.Router();

api.post('/guardar-persona',PersonController.save);

api.put('/actualizar-persona/:id',PersonController.update);

api.delete('/eliminar-persona/:id',PersonController.deleting);

api.get('/mostrar-persona', PersonController.list)



module.exports = api;