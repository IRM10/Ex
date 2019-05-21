'use strict'

var express = require('express');
var RedEstudio = require('../controllers/red-estudy');

var api= express.Router();

api.post('/guardar-redEstudio',RedEstudio.save);

api.put('/actualizar-redEstudio/:id',RedEstudio.update);

api.delete('/eliminar-redEstudio/:id',RedEstudio.deleting);

api.get('/mostrar-redEstudio', RedEstudio.list)



module.exports = api;