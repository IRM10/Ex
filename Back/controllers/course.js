'use strict'
var Course = require('../models/course');


//#region Guardar
function save(req,res){
    var course = new Course();
    var params = req.body;
    

 if(params.code && params.name){ //Campos requeridos
    course.Code = params.code;
    course.Name = params.name;
     Course.findOne({Code: course.Code},(err,issetCourse)=> { 
        if(err){
            res.status(500).send({message: 'Error al consultar la base de datos'});

        }else{
            if(!issetCourse){
                    course.save((err,courseSaved)=>{
                        if(err){
                            res.status(500).send({message: 'Error al guardar el Curso'});
                        }else{

                        
                            if(!courseSaved){
                                res.status(404).send({message: 'No se pudo guardar el Curso'});
                            }else{
                                res.status(200).send({Course: courseSaved});
                            }
                        }
                    });
              
            }else{
                res.status(200).send({message: 'El Curso ya ha sido registrado'});
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
    var courseId = req.params.id;
    

        Course.findByIdAndDelete(courseId,(err,courseDeleted)=> {
            if(err){
                res.status(404).send({message: 'Error al eliminar el Curso'});
            }else{
                if(!courseDeleted){
                    res.status(404).send({message: 'No se pudo eliminar el Curso'});
                }else{
                    
                    res.status(200).send({Course:courseDeleted, message: 'Se ha eliminado el Curso'});
                }
            }
        });

}
//#endregion

//#region Actualizar
function update(req,res){
    var courseId = req.params.id;
    var update = req.body;
      Course.findByIdAndUpdate(courseId,update,{new:true},(err,courseUpdated)=>{
            if(err){
                res.status(500).send({message: 'Error al actualizar el Curso'});
            }else{
                if(!courseUpdated){
                    res.status(404).send({message: 'No se pudo actualizar el Curso'});
                }else{
                    res.status(200).send({Course: courseUpdated});
                }
            }
        });

}
//#endregion

//#region Listar

function list(req,res){
    Course.find({},(err,courses)=>{
        if(err){
            res.status(500).send({message: 'No se ha podido listar los Cursos'});
        }else{
            res.status(200).send({courses});
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