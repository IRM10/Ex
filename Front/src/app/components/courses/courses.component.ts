	
		
		import { Component, OnInit } from '@angular/core';
    import { Course } from 'src/app/models/courses/courses'
    import { RestService } from '../../services/rest.service'
    import { ToastrService } from 'ngx-toastr';
    import { FormBuilder, FormGroup, Validators } from '@angular/forms';

    
    @Component({
      selector: 'app-courses',
      templateUrl: './courses.component.html',
      styleUrls: ['./courses.component.scss']
    })
    export class CoursesComponent implements OnInit {
      registerForm: FormGroup;
      submitted = false;
      course: Course;
      courses= [];
      constructor(private formBuilder: FormBuilder, public rest:RestService,private toastr: ToastrService) {
       }
    
      ngOnInit() {
        this.registerForm = this.formBuilder.group({
          code: ['', Validators.required],
          name: ['', Validators.required]
      }, {
         
      });
        this.getCursos();
      }

      get f() { return this.registerForm.controls; }
    
      onSubmit(){
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
          
          this.toastr.error('Ingresa todos los campos requeridos');
         
        }else{
 
            this.rest.setCourse(this.registerForm.value).subscribe(res=>{
              
             
            this.toastr.success('¡Registro almacenado correctamente!');
            console.log(res);
            this.getCursos();
            this.limpiar();
            this.registerForm.reset;
              
 
      })
    }
      }

      getCursos(){
        this.rest.getCursos().subscribe(res =>{
          console.log(res);
          this.courses = res.courses
        })
      }


      limpiar(){
        this.course.code = '';
        this.course.name = '';
      }

      
    
      getData(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))     
      }
    }