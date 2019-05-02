import { Component, OnInit } from '@angular/core';
import { Units } from 'src/app/models/units/units'
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {

  units: Units;
  constructor(public rest: RestService){
    this.rest.setUnit(this.units);
    this.units = new Units('')
  }

  ngOnInit() {
    this.getData();
  }

  onSubmit(){
    this.rest.setUnit(this.units).subscribe(res=>{
      console.log(res);
    });
  }

  getData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
  }

}

