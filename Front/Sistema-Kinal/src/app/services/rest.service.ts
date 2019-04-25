import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class RestService {
  public endpoint = 'http://localhost:3968/v1'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
mensaje = 'Guardar person ejecutado';

  constructor(private http: HttpClient) { }

  private extractData(res: Response){
    let body = res;
    return body || [] || {};
  }

 

  getPersons(): Observable<any>{
    return this.http.get(this.endpoint + '/mostrar-persona',this.httpOptions).pipe(map(this.extractData));

  }

  setPerson(person_guardar) {
    console.log(this.mensaje)
    var params = JSON.stringify(person_guardar);
    return this.http.post(this.endpoint + '/guardar-persona', params, this.httpOptions).pipe(map(this.extractData));
  }

}
