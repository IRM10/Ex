'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var academicUnitSchema = Schema ({
    Name: String
});

module.exports = mongoose.model(
    'AcademicUnit',academicUnitSchema,
    );