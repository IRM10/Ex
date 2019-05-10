import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/app/models/person/person'
import { RestService } from '../../services/rest.service'
import { ToastrService } from 'ngx-toastr';
import { validateConfig } from '@angular/router/src/config';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../../../helpers/must-match.validator';



@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})

export class PersonComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  
  person: Person;
  constructor(public rest: RestService, private toastr: ToastrService,
    private formBuilder: FormBuilder) { 


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

      {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
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
