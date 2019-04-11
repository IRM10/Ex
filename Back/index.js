'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3500;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017//SistemaKinal', {useNewUrlParser:true})
.then((err, res)=>{
    console.log('Conexión con la base de datos: EXITOSA');
    app.listen(port, ()=>{
        console.log('Servidor conectado correctamente :0');
        console.log('Sistema Kinal funcionando ;)');
    });
})
.catch(err => console.log(err));