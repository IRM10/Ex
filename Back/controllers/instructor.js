'use strict'
var Instructor = require('../models/instructor');


//#region Guardar
function save(req,res){
    var instructor = new Instructor();
    var params = req.body;
    

 if(params.Code && params.Profesion && params.PersonalInfo){ //Campos requeridos
    instructor.Code = params.Code;
    instructor.Profesion = params.Profesion;
    instructor.PersonalInfo = params.PersonalInfo
     Instructor.findOne({Code: instructor.Code},(err,issetInstructor)=> { 
        if(err){
            res.status(500).send({message: 'Error al consultar la base de datos'});

        }else{
            if(!issetInstructor){
                    instructor.save((err,instructorSaved)=>{
                        if(err){
                            res.status(500).send({message: 'Error al guardar el Instructor'});
                        }else{

                        
                            if(!instructorSaved){
                                res.status(404).send({message: 'No se pudo guardar el Instructor'});
                            }else{
                                res.status(200).send({Instructor: instructorSaved});
                            }
                        }
                    });
              
            }else{
                res.status(200).send({message: 'El Instructor ya ha sido registrada'});
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
    var instructorId = req.params.id;
    

        Instructor.findByIdAndDelete(instructorId,(err,instructorDeleted)=> {
            if(err){
                res.status(404).send({message: 'Error al eliminar el Instructor'});
            }else{
                if(!instructorDeleted){
                    res.status(404).send({message: 'No se pudo eliminar el Instructor'});
                }else{
                    
                    res.status(200).send({Instructor:instructorDeleted, message: 'Se ha eliminado el Instructor'});
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
    Instructor.find({},(err,instructor)=>{
        if(err){
            res.status(500).send({message: 'No se ha podido listar los Instructores'});
        }else{
            res.status(200).send({instructor});
        }
    }).populate('PersonalInfo');

}
//#endregion

module.exports ={
    save,
    deleting,
    update,
    list
}