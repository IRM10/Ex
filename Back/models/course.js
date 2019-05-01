'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var courseSchema = Schema ({
    Code: String,
    Name: String,
});

module.exports = mongoose.model(
    'Course',courseSchema,
    );