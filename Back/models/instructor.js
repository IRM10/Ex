'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var instructorSchema = Schema({
    Code: String,
    Profesion: String,
    PersonalInfo: [{type: Schema.ObjectId ,ref:'People'}]
});

module.exports = mongoose.model('Instructor', instructorSchema);