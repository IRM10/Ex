var Person = require('../models/person');

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

      
module.exports ={
    searchPerson
}