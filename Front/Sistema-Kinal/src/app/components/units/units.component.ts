import { Component, OnInit } from '@angular/core';
import { Units } from 'src/app/models/units/units'
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {
  units = []
  unitss: Units;
  constructor(public rest: RestService){
    this.rest.setUnit(this.unitss);
    this.unitss = new Units('')
  }

  ngOnInit() {
    this.getData();
    this.getUnits();
  }

  onSubmit(){
    this.rest.setUnit(this.unitss).subscribe(res=>{
      console.log(res);
      this.limpiar();
      this.getUnits();
    });
  }

  getUnits(){
    this.rest.getUnidades().subscribe(res =>{
      console.log(res);
      this.units = res.units
    })
  }


  limpiar(){
    this.unitss.name = '';
  }

  getData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
  }

}

