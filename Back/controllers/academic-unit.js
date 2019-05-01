'use strict'
var AcademicUnit = require('../models/academic-unit');


//#region Guardar
function save(req,res){
    var academicUnit = new AcademicUnit();
    var params = req.body;
    

 if(params.name){ //Campos requeridos
    academicUnit.Name = params.name;
     AcademicUnit.findOne({Name: academicUnit.Name},(err,issetAcademic)=> { 
        if(err){
            res.status(500).send({message: 'Error al consultar la base de datos'});

        }else{
            if(!issetAcademic){
                    academicUnit.save((err,academicSaved)=>{
                        if(err){
                            res.status(500).send({message: 'Error al guardar Unidad Academica'});
                        }else{

                        
                            if(!academicSaved){
                                res.status(404).send({message: 'No se pudo guardar la Unidad Academica'});
                            }else{
                                res.status(200).send({UnidadAcademica: academicSaved});
                            }
                        }
                    });
              
            }else{
                res.status(200).send({message: 'La Unidad Academica ya ha sido registrada'});
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
    var academicId = req.params.id;
    

        AcademicUnit.findByIdAndDelete(academicId,(err,academicDeleted)=> {
            if(err){
                res.status(404).send({message: 'Error al eliminar la Unidad Academica'});
            }else{
                if(!academicDeleted){
                    res.status(404).send({message: 'No se pudo eliminar la Unidad Academica'});
                }else{
                    
                    res.status(200).send({AcademicUnit:academicDeleted, message: 'Se ha eliminado la Unidad Academica'});
                }
            }
        });

}
//#endregion

//#region Actualizar
function update(req,res){
    var academicId = req.params.id;
    var update = req.body;
      AcademicUnit.findByIdAndUpdate(academicId,update,{new:true},(err,academicUpdated)=>{
            if(err){
                res.status(500).send({message: 'Error al actualizar la Unidad Academica'});
            }else{
                if(!academicUpdated){
                    res.status(404).send({message: 'No se pudo actualizar la Unidad Academica'});
                }else{
                    res.status(200).send({AcvademicUnit: academicUpdated});
                }
            }
        });

}
//#endregion

//#region Listar

function list(req,res){
    AcademicUnit.find({},(err,units)=>{
        if(err){
            res.status(500).send({message: 'No se ha podido listar las Unidades Academicas'});
        }else{
            res.status(200).send({units});
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