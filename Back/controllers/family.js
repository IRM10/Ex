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
  var familyId = params.id;
  var personId = params.persona
  var father = null;
  var mother = null;
  var son = null;
  var attendant = null;
   

  if (params.seleccionar == 'PADRE'){
    father = personId;
  }else if (params.seleccionar == 'MADRE'){
    mother = personId;
    
  }else if(params.seleccionar = 'HIJO'){
    son = personId;
  }else if(params.seleccionar = 'ENCARGADO'){
    attendant = personId;
  }
 
  console.log(familyId);
  Family.findByIdAndUpdate(familyId,{$set: {'Father':father,'Mother': mother, 'Son':son,'Attendant':attendant} }, {New:true},(err,familyUpdated)=>{
      
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

    Family.find().sort({$natural: -1}).limit(1).exec(function(err, familias){

    
      if(err){
          res.status(500).send({message: 'No se ha podido listar las familias'});
      }else{
        if(!familias){
          res.status(200).send({message:'Hola'});
        }
          res.status(200).send({familias});
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
