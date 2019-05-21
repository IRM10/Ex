'use strict'
var RedEstudy = require('../models/red-estudy');


//#region Guardar
function save(req,res){
    var redEstudy = new RedEstudy();
    var params = req.body;
    

 if(params.Career && params.Name && params.Courses){ //Campos requeridos
    redEstudy.Career = params.Career;
    redEstudy.Name = params.Name;
    redEstudy.Courses = params.Courses;
    redEstudy.FechaInicio = params.FechaInicio;
    redEstudy.FechaEnd = params.FechaEnd;
    RedEstudy.findOne({Name: redEstudy.Name},(err,issetRed)=> { 
        if(err){
            res.status(500).send({message: 'Error al consultar la base de datos'});

        }else{
            if(!issetRed){
                    redEstudy.save((err,redSaved)=>{
                        if(err){
                            res.status(500).send({message: 'Error al guardar la Red de estudio'});
                        }else{

                        
                            if(!redSaved){
                                res.status(404).send({message: 'No se pudo guardar la Red de estudio'});
                            }else{
                                res.status(200).send({RedEstudy: redSaved});
                            }
                        }
                    });
              
            }else{
                res.status(200).send({message: 'La Red de estudio ya ha sido registrada'});
            }
        }
    });


    }else{
        res.status(200).send({message: 'Introduce bien los datos'});
    }
   
    
}
//#endregion

//#region Eliminar
function deleting(req,res){
    var redId = req.params.id;
    

        RedEstudy.findByIdAndDelete(redId,(err,redDeleted)=> {
            if(err){
                res.status(404).send({message: 'Error al eliminar la Red de estudio'});
            }else{
                if(!redDeleted){
                    res.status(404).send({message: 'No se pudo eliminar la Red de estudio'});
                }else{
                    
                    res.status(200).send({RedEstudy:redDeleted, message: 'Se ha eliminado la Red de estudio'});
                }
            }
        });

}
//#endregion

//#region Actualizar
function update(req,res){
    var redId = req.params.id;
    var update = req.body;
      RedEstudy.findByIdAndUpdate(redId,update,{new:true},(err,redUpdated)=>{
            if(err){
                res.status(500).send({message: 'Error al actualizar la Red de estudio'});
            }else{
                if(!redUpdated){
                    res.status(404).send({message: 'No se pudo actualizar la Red de estudio'});
                }else{
                    res.status(200).send({RedEstudy: redUpdated});
                }
            }
        });

}
//#endregion

//#region Listar

function list(req,res){
    RedEstudy.find({},(err,reds)=>{
        if(err){
            res.status(500).send({message: 'No se ha podido listar las Red de estudio'});
        }else{
            res.status(200).send({reds});
        }
    });

}
//#endregion

module.exports ={
    save,
    deleting,
    update,
    list
}