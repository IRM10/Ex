'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var redEstudySchema = Schema ({
    Career: String,
    Name: String,
    Courses: Array,
    FechaInicio: Date,
    FechaEnd: Date
});

module.exports = mongoose.model('RedEstudy', redEstudySchema);