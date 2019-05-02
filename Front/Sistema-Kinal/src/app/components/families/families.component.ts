

import { Component, OnInit } from '@angular/core';
import { Families } from 'src/app/models/families/families';
import { RestService } from '../../services/rest.service'


@Component({
  selector: 'app-families',
  templateUrl: './families.component.html',
  styleUrls: ['./families.component.scss']
})
export class FamiliesComponent implements OnInit {
  family: Families;
  families= []; 
  update=[];
  search: string;
  results =[];
  constructor(public rest: RestService) { 
    this.rest.setFamily(this.family);
    this.family = new Families('',[''],[''],[''],['']);
  }

  ngOnInit() {
    console.log(this.buscar());

  }

  onSubmit(){
    this.rest.setFamily(this.family).subscribe(res=>{
    
      console.log(res);
    });
   }

   buscar(){
    this.rest.searchPerson(this.search).subscribe((res) => {
      if(!res){
          console.log();
      }else{
      // this.results = res.results;
       //console.log(this.results)

      } 
    });
  }

  actualizar(){
    this.rest.updateFamily(this.family).subscribe(res=>{
      console.log(res);
    });
   }

}
