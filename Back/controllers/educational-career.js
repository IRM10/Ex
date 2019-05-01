'use strict'
var EducationalCareer = require('../models/educational-career');


//#region Guardar
function save(req,res){
    var educationalCareer = new EducationalCareer();
    var params = req.body;
    

 if(params.code && params.name && params.description){ //Campos requeridos
    educationalCareer.Code = params.code;
    educationalCareer.Name = params.name;
    educationalCareer.Description = params.description
     EducationalCareer.findOne({Code: educationalCareer.Code},(err,issetEducational)=> { 
        if(err){
            res.status(500).send({message: 'Error al consultar la base de datos'});

        }else{
            if(!issetEducational){
                    educationalCareer.save((err,careerSaved)=>{
                        if(err){
                            res.status(500).send({message: 'Error al guardar la Carrera educativa'});
                        }else{

                        
                            if(!careerSaved){
                                res.status(404).send({message: 'No se pudo guardar la Carrera Educativa'});
                            }else{
                                res.status(200).send({EducationalCareer: careerSaved});
                            }
                        }
                    });
              
            }else{
                res.status(200).send({message: 'La Carrera Educativa ya ha sido registrada'});
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
    var careerId = req.params.id;
    

        EducationalCareer.findByIdAndDelete(careerId,(err,careerDeleted)=> {
            if(err){
                res.status(404).send({message: 'Error al eliminar la Carrera Educativa'});
            }else{
                if(!careerDeleted){
                    res.status(404).send({message: 'No se pudo eliminar la Carrera Educativa'});
                }else{
                    
                    res.status(200).send({EducationalCareer:careerDeleted, message: 'Se ha eliminado la Carrera Educativa'});
                }
            }
        });

}
//#endregion

//#region Actualizar
function update(req,res){
    var careerId = req.params.id;
    var update = req.body;
      EducationalCareer.findByIdAndUpdate(careerId,update,{new:true},(err,careerUpdated)=>{
            if(err){
                res.status(500).send({message: 'Error al actualizar la Carrera Educativa'});
            }else{
                if(!careerUpdated){
                    res.status(404).send({message: 'No se pudo actualizar la Carrera Educativa'});
                }else{
                    res.status(200).send({EducationalCareer: careerUpdated});
                }
            }
        });

}
//#endregion

//#region Listar

function list(req,res){
    EducationalCareer.find({},(err,careers)=>{
        if(err){
            res.status(500).send({message: 'No se ha podido listar las Carreras Educativas'});
        }else{
            res.status(200).send({careers});
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