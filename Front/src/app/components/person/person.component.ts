import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/app/models/person/person'
import { RestService } from '../../services/rest.service'
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})

export class PersonComponent implements OnInit {

  
  person: Person;
  constructor(public rest: RestService, private toastr: ToastrService) { 


    this.rest.setPerson(this.person);
    this.person = new Person('','','','','','','',[''],'', [''], null,'','','','','','','', null,null, null , null, null, '');
  }
  public email = [];
  public telefonos = [];


  ngOnInit() {
    this.getData();
  
  }

  onSubmit(){
    this. addEmail();
    this.person.email = this.email;
    this.rest.setPerson(this.person).subscribe(res=>{
      console.log(res);
      if(res.message =='Ingrese todos los campos'){
        this.toastr.error('Ingresa todos los campos requeridos');
      }
      if(this.person.name = ""){
        this.toastr.warning('Por favor, llena todos los campos correctamente');
      }
      else if(res.Person){
        this.toastr.success('¡Registro almacenado correctamente!');
      }
    });
   }

   addEmail(){
    this.email.push(this.person.email)

    console.log(this.email)
    this.person.email = [""]
  }

  addTelefonos(){
    this.telefonos.push(this.person.other)

    console.log(this.telefonos)
    this.person.other = [null]
  }
 


  getData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  }

}
