'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var familySchema = Schema ({
    Surnames: String,
    Father:{type: Schema.ObjectId ,ref:'People'},
    Mother:{type: Schema.ObjectId ,ref:'People'},
    Son: [{type: Schema.ObjectId ,ref:'People'}],
    Attendant: [{type: Schema.ObjectId ,ref:'People'}]

})

module.exports = mongoose.model('Family',familySchema);