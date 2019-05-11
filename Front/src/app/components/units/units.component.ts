import { Component, OnInit } from '@angular/core';
import { Units } from 'src/app/models/units/units'
import { RestService } from 'src/app/services/rest.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {
  
  registerForm: FormGroup;
  submitted = false;
  unit: Units;
  units= [];
  constructor(private formBuilder: FormBuilder, public rest:RestService,private toastr: ToastrService) {
   }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required]
  }, {
     
  });
    this.getUnit();
  }

  get f() { return this.registerForm.controls; }

  onSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      
      this.toastr.error('Ingresa todos los campos requeridos');
     
    }else{

        this.rest.setUnit(this.registerForm.value).subscribe(res=>{
          
         
        this.toastr.success('¡Registro almacenado correctamente!');
        console.log(res);
        this.getUnit();
          

  })
}
  }

  getUnit(){
    this.rest.getUnidades().subscribe(res =>{
      console.log(res);
      this.units = res.units
    })
  }


 
  getData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
  }

}

