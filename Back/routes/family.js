'use strict'

var express = require('express');
var FamilyController = require('../controllers/family');

var api= express.Router();

api.post('/buscar-persona', FamilyController.searchPerson);
module.exports = api;