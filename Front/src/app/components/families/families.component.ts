import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Family } from 'src/app/models/families/family';


@Component({
  selector: 'app-families',
  templateUrl: './families.component.html',
  styleUrls: ['./families.component.scss']
})
export class FamiliesComponent implements OnInit {
  familias= [];
  search:String;
  family:Family
  results=[];
  registerForm: FormGroup;
  registerForm1: FormGroup;

  submitted = false;




  constructor(private formBuilder: FormBuilder, public rest:RestService,private toastr: ToastrService) { 
    this.rest.updateFamily(this.family);
    this.family = new Family(null,null,null,null,null,'',null);
  
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      surnames: ['', Validators.required]
  }, {
     
  });

  this.registerForm1 = this.formBuilder.group({
    id: '',
    personaId:'',
    seleccionar: ''
}, {
   
});


  }

  get f() { return this.registerForm.controls; }

  onSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      
      this.toastr.error('Ingresa todos los campos requeridos');
     
    }else{

        this.rest.setFamily(this.registerForm.value).subscribe(res=>{
          
         
        this.toastr.success('¡Registro almacenado correctamente!');
        console.log(res);
        this.getFamily();
          

  })
}
   }

   getFamily(){
    this.rest.getFamilies().subscribe(res =>{
      console.log(res);
      this.familias = res.familias
    })
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

  actualizar(){
    this.rest.updateFamily(this.registerForm1.value).subscribe(res=>{
      console.log(res);
    });
  }
    
  
      
 
}