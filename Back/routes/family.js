'use strict'

var express = require('express');
var FamilyController = require('../controllers/family');

var api= express.Router();

api.post('/guardar-familia', FamilyController.saveFamily);

api.post('/buscar-persona', FamilyController.searchPerson);

api.post('/actualizar-familia',FamilyController.update);

api.get('/mostrar-familia', FamilyController.list)

module.exports = api;