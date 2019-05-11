import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Career } from 'src/app/models/careers/careers';
import { RestService } from '../../services/rest.service'
import { ToastrService } from 'ngx-toastr';




// import custom validator to validate that password and confirm password fields match


@Component({
    selector: 'app-careers',
    templateUrl: 'careers.component.html',
    styleUrls: ['careers.component.scss']
})

export class CareersComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    career: Career;
    careers= [];
    constructor(private formBuilder: FormBuilder, public rest:RestService,private toastr: ToastrService) { }

    ngOnInit() {
      this.getCarreras();
      this.registerForm = this.formBuilder.group({
        code: ['', Validators.required],
        name: ['', Validators.required],
        description: ['', Validators.required]
    }, {
       
    });
    }
  
  
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
          this.toastr.error('Ingresa todos los campos requeridos');
        }else{
            this.rest.setCareer(this.registerForm.value).subscribe(res=>{
            this.toastr.success('¡Registro almacenado correctamente!');
            console.log(res);
            this.getCarreras();
            this.limpiar();
            this.registerForm.reset;
      })
    }
      }
       
      limpiar(){
        this.career.code = '';
        this.career.name = '';
        this.career.description = '';
      }
      
      getCarreras(){
        this.rest.getCarreras().subscribe(res =>{
          console.log(res);
          this.careers = res.careers
        })
      }
    }
