	
		
		import { Component, OnInit } from '@angular/core';
    import { Course } from 'src/app/models/courses/courses'
    import { RestService } from '../../services/rest.service'
    
    @Component({
      selector: 'app-courses',
      templateUrl: './courses.component.html',
      styleUrls: ['./courses.component.scss']
    })
    export class CoursesComponent implements OnInit {
    
      course: Course;
      courses= [];
      constructor(public rest:RestService) {
        this.rest.setCourse(this.course);
        this.course = new Course('','')
       }
    
      ngOnInit() {
        this.getData();
        this.getCursos();
      }
    
      onSubmit(){
        this.rest.setCourse(this.course).subscribe(res=>{
          console.log(res);
          this.limpiar();
          this.getCursos();
        });
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