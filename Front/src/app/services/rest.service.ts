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

  setPerson(person_guardar): Observable<any> {
    console.log(this.mensaje)
    var params = JSON.stringify(person_guardar);
    return this.http.post(this.endpoint + '/guardar-persona', params, this.httpOptions).pipe(map(this.extractData));
  }

  setFamily(family_guardar): Observable<any>{
    console.log(this.mensaje)
    var params = JSON.stringify(family_guardar);
    return this.http.post(this.endpoint + '/guardar-familia', params, this.httpOptions).pipe(map(this.extractData));
  }


  setCourse(curso_guardar): Observable<any>{
    console.log(this.mensaje)
    var params = JSON.stringify(curso_guardar);
    return this.http.post(this.endpoint + '/guardar-curso', params, this.httpOptions).pipe(map(this.extractData));
  }  

  setUnit(unidad_guardar): Observable<any>{
    console.log(this.mensaje)
    var params = JSON.stringify(unidad_guardar);
    return this.http.post(this.endpoint + '/guardar-unidadAcademica', params, this.httpOptions).pipe(map(this.extractData));
  }

  setCareer(carrera_guardar): Observable<any>{
    console.log(this.mensaje)
    var params = JSON.stringify(carrera_guardar);
    return this.http.post(this.endpoint + '/guardar-carreraEducativa', params, this.httpOptions).pipe(map(this.extractData));

  }
  setRed(redEstudio_guardar): Observable<any>{
    console.log(this.mensaje)
    var params = JSON.stringify(redEstudio_guardar);
    return this.http.post(this.endpoint + '/guardar-redEstudio', params, this.httpOptions).pipe(map(this.extractData));

  }
  getRedes(): Observable<any>{
    return this.http.get(this.endpoint + '/mostrar-redEstudio',this.httpOptions).pipe(map(this.extractData));

  }
  setInstructor(instructor_guardar): Observable<any>{
    console.log(this.mensaje)
    var params = JSON.stringify(instructor_guardar);
    return this.http.post(this.endpoint + '/guardar-instructor', params, this.httpOptions).pipe(map(this.extractData));

  }
  deleteInstructor(id): Observable<any>{
    var params = id;
    return this.http.delete(this.endpoint + '/eliminar-instructor/' + params, this.httpOptions).pipe(map(this.extractData));
  }
  getInstructores(): Observable<any>{
    return this.http.get(this.endpoint + '/mostrar-instructor',this.httpOptions).pipe(map(this.extractData));

  }

  getCursos(): Observable<any>{
    return this.http.get(this.endpoint + '/mostrar-curso',this.httpOptions).pipe(map(this.extractData));

  }

  getUnidades(): Observable<any>{
    return this.http.get(this.endpoint + '/mostrar-unidadAcademica',this.httpOptions).pipe(map(this.extractData));

  }

  getCarreras(): Observable<any>{
    return this.http.get(this.endpoint + '/mostrar-carreraEducativa',this.httpOptions).pipe(map(this.extractData));

  }

  getFamilies(): Observable<any>{
    return this.http.get(this.endpoint + '/mostrar-familia',this.httpOptions).pipe(map(this.extractData));

  }
  getPerson(): Observable<any>{
    return this.http.get(this.endpoint + '/mostrar-persona',this.httpOptions).pipe(map(this.extractData));

  }

  searchPerson(search): Observable<any>{
    return this.http.post(this.endpoint + '/buscar-persona', {search}, this.httpOptions).pipe(map(this.extractData));
  }

  updateFamily(actualizar_familia) {
    console.log(this.mensaje)
    var params = JSON.stringify(actualizar_familia);
    return this.http.post(this.endpoint + '/actualizar-familia', params, this.httpOptions).pipe(map(this.extractData));
  }

//#endregion

}