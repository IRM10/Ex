var Person = require('../models/person');


//#region Guardar
function save(req,res){
    
    var params = req.body;

    if(params.name && params.lastname && params.surname && params.secondsurname  && params.email && params.birth && params.birth && religion
        && params.email && params.gender && params.department && params.municipality && params.zone && params.residential 
        && params.avenue && params.street && params.sector && params.number && params.cellphone && params.house && params.other){ 
    //Campos requeridos
    var name = params.name;
    var lastname = params.lastname;
    var surname = params.surname;
    var secondsurname = params.secondsurname;
    var birth = params.birth;
    var religion = params.religion;
    var email = params.email;
    var gender = params.gender;
    var department = params.department;
    var municipality = params.municipality;
    var zone = params.zone;
    var residential = params.residential;
    var avenue = params.avenue;
    var street = params.street;
    var sector = params.sector;
    var number = params.number;
    var cellphone = params.cellphone;
    var house = params.house;
    var other = params.other;

    Person.insertMany({'Name':name,'Lastname': lastname, 'Surname':surname,'SecondSurname':secondsurname, 
    'Birth':birth, 'Religion': religion, 'Email':email,'Gender':gender,'Address': {'Department':department, 'Municipality':municipality, 'Zone':zone,
    'Residential': residential, 'Avenue': avenue, 'Street':street, 'Sector': sector, 'Number':number}, 'Phones':{ 'Cellphone':cellphone,'House':house,'Phones.Other':other}   },(err,personSaved) =>{   
                if(err){
                    res.status(500).send({message: 'Error al guardar Persona'});
                }else{
                    if(!personSaved){
                    res.status(404).send({message: 'No se pudo guardar la Persona'});
                        }else{
                        res.status(200).send({Person: personSaved});
                            }
                        }
                    });
    }
}
//#endregion

//#region Actualizar
function update(req,res){
        var params = req.body
        var personId = req.params.id;
        var name = params.name;
        var lastname = params.lastname;
        var surname = params.surname;
        var secondsurname = params.secondsurname;
        var birth = params.birth;
        var religion = params.religion;
        var email = params.email;
        var gender = params.gender;
        var department = params.department;
        var municipality = params.municipality;
        var zone = params.zone;
        var residential = params.residential;
        var avenue = params.avenue;
        var street = params.street;
        var sector = params.sector;
        var number = params.number;
        var cellphone = params.cellphone;
        var house = params.house;
        var other = params.other;
            Person.findByIdAndUpdate(personId,{$set: {'Name':name,'Lastname': lastname, 'Surname':surname,'SecondSurname':secondsurname, 
            'Birth':birth, 'Religion': religion, 'Email':email,'Gender':gender,'Address.Department':department, 'Address.Municipality':municipality, 'Address.Zone':zone,
        'Address.Residential': residential, 'Address.Avenue': avenue, 'Address.Street':street, 'Address.Sector': sector, 'Address.Number':number,'Phones.Cellphone':cellphone,'Phones.House':house,'Phones.Other':other} }, {New:true},(err,personUpdated)=>{

            
                if(err){
                    res.status(500).send({message: 'Error al actualizar la persona'}); 
                }else{
                    if(!personUpdated){
                        res.status(404).send({message: 'No se pudo actualizar la persona'});
                    }else{
                        
                        res.status(200).send({PersonaActualizada: personUpdated});
                    }
                }
            });
       
 }
 //#endregion

 //#region Eliminar
function deleting(req,res){
    var personId = req.params.id;

        Person.findByIdAndDelete(personId,(err,personDeleted)=> {
            if(err){
                res.status(404).send({message: 'Error al eliminar la Persona'});
            }else{
                if(!personDeleted){
                    res.status(404).send({message: 'No se pudo eliminar la Persona'});
                }else{
                    
                    res.status(200).send({Persona:personDeleted, message:'Se a eliminado la persona'});
                }
            }
        });    
}
//#endregion

//#region Listar
function list(req,res){    
    Person.find({},(err,people)=>{
        if(err){
            res.status(500).send({message: 'No se ha podido listar las personas'});
        }else{
            res.status(200).send({people});
        }
    });

}
//#endregion

module.exports ={
 save,
 update,
 deleting,
 list
}