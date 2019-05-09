import { Component, OnInit } from '@angular/core';
import { Career } from 'src/app/models/careers/careers'
import { RestService } from '../../services/rest.service'

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {
careers = [];
  career: Career;
  constructor(public rest:RestService) {
    this.rest.setCareer(this.career);
    this.career = new Career('','','')
   }

  ngOnInit() {
    this.getData();
    this.getCarer();
  }

   onSubmit(){
    this.rest.setCareer(this.career).subscribe(res=>{
      console.log(res);
      this.limpiar()
      this.getCarer();
    });
  }

  getCarer(){
    this.rest.getCarreras().subscribe(res =>{
      console.log(res);
      this.careers = res.careers
    })
  }


  limpiar(){
    this.career.code = '';
    this.career.name = '';
    this.career.description = '';
  }


  getData(){
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))   
  }
}
