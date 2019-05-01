'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var educationalCareerSchema = Schema ({
    Code: String,
    Name: String,
    Description: String
});

module.exports = mongoose.model(
    'EducationalCareer',educationalCareerSchema,
    );