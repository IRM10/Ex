'use strict'

var express = require('express');
var AcademiUnitController = require('../controllers/academic-unit');

var api= express.Router();

api.post('/guardar-unidadAcademica',AcademiUnitController.save);

api.put('/actualizar-unidadAcademica/:id',AcademiUnitController.update);

api.delete('/eliminar-unidadAcademica/:id',AcademiUnitController.deleting);

api.get('/mostrar-unidadAcademica', AcademiUnitController.list)



module.exports = api;