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


//#region   API REST URLS

  getPersons(): Observable<any>{
    return this.http.get(this.endpoint + '/mostrar-persona',this.httpOptions).pipe(map(this.extractData));

  }

  setPerson(person_guardar) {
    console.log(this.mensaje)
    var params = JSON.stringify(person_guardar);
    return this.http.post(this.endpoint + '/guardar-persona', params, this.httpOptions).pipe(map(this.extractData));
  }

  setFamily(family_guardar){
    console.log(this.mensaje)
    var params = JSON.stringify(family_guardar);
    return this.http.post(this.endpoint + '/guardar-familia', params, this.httpOptions).pipe(map(this.extractData));
  }


  setCourse(curso_guardar){
    console.log(this.mensaje)
    var params = JSON.stringify(curso_guardar);
    return this.http.post(this.endpoint + '/guardar-curso', params, this.httpOptions).pipe(map(this.extractData));
  }  

  setUnit(unidad_guardar){
    console.log(this.mensaje)
    var params = JSON.stringify(unidad_guardar);
    return this.http.post(this.endpoint + '/guardar-unidadAcademica', params, this.httpOptions).pipe(map(this.extractData));
  }

  setCareer(carrera_guardar){
    console.log(this.mensaje)
    var params = JSON.stringify(carrera_guardar);
    return this.http.post(this.endpoint + '/guardar-carreraEducativa', params, this.httpOptions).pipe(map(this.extractData));

  }

//#endregion

}