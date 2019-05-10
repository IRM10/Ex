import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/app/models/person/person'
import { RestService } from '../../services/rest.service'
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})

export class PersonComponent implements OnInit {
  public codigo: number;
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

  onSubmit(formularioRegistro: NgForm){
    this. addEmail();
    this.person.email = this.email;
    console.log(this.person);
    this.rest.setPerson(this.person).subscribe(res=>{
      console.log(res);
      if(res.message =='Ingrese todos los campos'){
        this.toastr.error('Ingresa todos los campos requeridos');
      }
      else if(res.Person){
        this.toastr.success('¡Registro almacenado correctamente!');
        formularioRegistro.resetForm();
        this.person.email = [''],
        this.person.other = [null],
        this.codigo = null
        
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
