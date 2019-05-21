import { Component, OnInit } from '@angular/core';
import { Red } from 'src/app/models/red/red'
import { RestService } from '../../services/rest.service'
import { NgForm, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { reduce } from 'rxjs/operators';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.scss']
})
export class RedComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  red: Red;
  reds= [];
  constructor(private formBuilder: FormBuilder, public rest:RestService,private toastr: ToastrService) {
    this.red = new Red('','','',null,null);
}
public Courses = [];

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Career: ['', Validators.required],
      Name: ['', Validators.required],
      Courses: ['', Validators.required],
      FechaInicio: ['', Validators.required],
      FechaEnd: ['', Validators.required],
  }, {
     
  });
    this.getRedes();
  }
  get f() { return this.registerForm.controls; }

  onSubmit(){
    this. addCourses();
    this.red.Courses = this.Courses;
    this.submitted = true;
    this.red.Name = this.red.Name;
    this.red.Career = this.red.Career;
    this.red.Courses = this.red.Courses;
    this.rest.setRed(this.red).subscribe(res=>{
    console.log(res);
    // stop here if form is invalid
    if (this.red.Name == "" || this.red.Career == "" || this.red.Courses == "") {
      this.toastr.error('Ingresa todos los campos requeridos')

    }
      else if(res.RedEstudy != null){
        this.toastr.success('¡Registro almacenado correctamente!');
        this.getRedes();
        this.limpiar();
      }


else if(res.message == 'La Red de estudio ya ha sido registrada'){
  this.toastr.error('La Red ya fue registrada');
}
});
  }
  getRedes(){
    this.rest.getRedes().subscribe(res =>{
      console.log(res);
      this.reds = res.reds
    })
  }
  addCourses() {
    this.Courses.push(this.red.Courses)

    console.log(this.Courses)
    this.red.Courses = [""]
  }
  limpiar(){
    this.red.Career = '';
    this.red.Name = '';
    this.red.Courses = '';
    this.red.FechaInicio = null;
    this.red.FechaEnd = null;
  }
}
