import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/app/models/person/person'
import { RestService } from '../../services/rest.service'


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})

export class PersonComponent implements OnInit {

  
  person: Person;
  constructor(public rest: RestService) { 
    this.text = ""
    this.rest.setPerson(this.person);
    this.person = new Person('','','','','','','',[''], '', null,'','','','','','','', null,null, null , null, null, '');
  }
  public email = [];
  public text: string;
  ngOnInit() {
    this.getData();
  
  }

  onSubmit(){
    this.rest.setPerson(this.person).subscribe(res=>{
      console.log(res);
    });
   }

   addEmail(){
    this.email.push(this.text)

    console.log(this.email)
    this.text = ""
  }

  getData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  }

}
