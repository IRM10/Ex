'use strict'

var mongoose = require('mongoose');
var app =require('./app');
var port  = process.env.PORT || 3968;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/DBColegio',{useNewUrlParser:  true})
.then((err,res)=>{
console.log('Se ha conectado a base de datos de Colegio exitosamente');
app.listen(port,()=> {
console.log('Los servidores estan funcionando correctamente');
});
})

.catch(err => console.log(err));