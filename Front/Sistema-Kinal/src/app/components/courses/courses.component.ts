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
  constructor(public rest:RestService) {
    this.rest.setCourse(this.course);
    this.course = new Course('','')
   }

  ngOnInit() {
    this.getData();
  }

  onSubmit(){
    this.rest.setCourse(this.course).subscribe(res=>{
      console.log(res);
    });
  }

  getData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))     
  }
}
