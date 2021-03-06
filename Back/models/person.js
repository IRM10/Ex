'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var personSchema = Schema ({
    Name: String,
    Lastname: String,
    Surname: String,
    SecondSurname: String,
    MarriedSurname: String,
    Birth: String,
    Religion: String,
    Email: Array,
    Gender: String,
    Address: Object,
    Department: String,
    Municipality: String,
    Zone: String,
    Residential: String,
    Avenue: String,
    Street: String,
    Sector: String,
    Number: Number,
    Phones: Object,
    Cellphone: Number,
    House: Number,
    Other: Number,
    Status: String,
    AddressComplete: String
});

module.exports = mongoose.model(
    'People',personSchema,
    );