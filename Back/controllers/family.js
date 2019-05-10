var Person = require('../models/person');
var Family = require('../models/family' )

//#region Guardarm

function saveFamily (req,res){
  var family = new Family();
  var params = req.body;

  
  if(params.surnames){
      family.Surnames = params.surnames;
      family.Son = null;
      family.Father = null;
      family.Mother = null;
      family.Attendant = null;
     
  
          
                  family.save((err,familySaved)=>{
                      if(err){
                          res.status(404).send({message: 'Error al guardar familia'});
                      }else{
                          if(!familySaved){
                              res.status(404).send({message: 'No se pudo guardar la familia'});
                          }else{
                          res.status(200).send({Family: familySaved});
                          }
                      }
                  });
             
          
     
  }else{
      res.status(200).send({message: 'Ingresar bien los datos'});
  }
  
  }



//#endregion

//#region Buscar Persona
function searchPerson(req, res){
    var params = req.body;
    Person.find({
      $or: [
        {Name: params.search },
        {Lastname: params.search},
        {Surname: params.search},
        {SecondSurname: params.search}
      ]
    }, (err, results)=>{
      if(err){
        res.status(404).send({message: 'Error general'})
      }else{
        if(!results){
          res.status(200).send({message: 'No hay registros'});
        }else{
          res.status(200).send({results});
        }
      }
    });
  }

  //#endregion

//#region Actualizar Familia 
function update(req,res){
  var params = req.body
  var familyId = req.params.id;
  var father = params.father;
  var mother = params.mother;
  var son = params.son;
  var attendant = params.attendant;
 
  
  Family.updateMany({_id:familyId},{$set: {'Father':father,'Mother': mother, 'Son':son,'Attendant':attendant} }, {New:true},(err,familyUpdated)=>{
      
          if(err){
              res.status(500).send({message: 'Error al actualizar la familia'}); 
          }else{
              if(!familyUpdated){
                  res.status(404).send({message: 'No se pudo actualizar la familia'});
              }else{
                  
                  res.status(200).send({Family: familyUpdated});
              }
          }
      });
 
}
//#endregion

//#region Listar
function list(req,res){    
  Family.find({},(err,families)=>{
      if(err){
          res.status(500).send({message: 'No se ha podido listar las familias'});
      }else{
          res.status(200).send({families});
      }
  });

}
//#endregion


//#endregion
module.exports ={
    searchPerson,
    saveFamily,
    update,
    list
  }