import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service'
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { reduce } from 'rxjs/operators';
import { Instructor } from 'src/app/models/instuctor/instructor';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss']
})
export class InstructorComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  search:String;
  instructor: Instructor;
  results=[];
  instructors= [];
  people=[];
  constructor(private formBuilder: FormBuilder, public rest:RestService,private toastr: ToastrService) {
    this.instructor = new Instructor('','',null);
  }

  ngOnInit() {
    
  this.getPersona()
    this.registerForm = this.formBuilder.group({
      Code: ['', Validators.required],
      Profesion: ['', Validators.required],
      PersonalInfo: ['', Validators.required],
  }, {
     
  });
    this.getInstructores();
  }



  get f() { return this.registerForm.controls; }

  onSubmit(){
    this.submitted = true;
    this.instructor.Code = this.instructor.Code;
    this.instructor.Profesion = this.instructor.Profesion;
    this.instructor.PersonalInfo = this.instructor.PersonalInfo;
    this.rest.setInstructor(this.instructor).subscribe(res=>{
      this.getInstructores();
    console.log(res);
    // stop here if form is invalid
    if (this.instructor.Code == "" || this.instructor.Profesion == "" || this.instructor.PersonalInfo == null) {
      this.toastr.error('Ingresa todos los campos requeridos')

    }
      else if(res.Instructor != null){
        this.toastr.success('¡Registro almacenado correctamente!');
        this.getInstructores();
        this.limpiar();
      }


else if(res.message == 'El Instructor ya ha sido registrada'){
  this.toastr.error('El Instructor ya fue registrado');
}
});
  }
  getInstructores(){
    this.rest.getInstructores().subscribe(res =>{
      console.log(res);
      this.instructors = res.instructors
    })
  }
  limpiar(){
    this.instructor.Code = '';
    this.instructor.Profesion = '';
    this.instructor.PersonalInfo = null;
  }
    buscar(){
      this.rest.searchPerson(this.search).subscribe((res) => {
        if(!res){
            console.log();
        }else{
        this.results = res.results;
        console.log(this.results)
    
        } 
      });
    
  }

  getPersona(){
    this.rest.getPerson().subscribe(res =>{
      console.log(res);
      this.people = res.people
    })
  }
  
  deleteInstructor(id){
    console.log(id);
    console.log(this.instructors[id]._id);
    this.rest.deleteInstructor(this.instructors[id]._id).subscribe(res => {
      this.toastr.success('El Instructor ya fue eliminado');
      console.log(res);
    });
  }
}
