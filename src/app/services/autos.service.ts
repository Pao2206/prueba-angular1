import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  constructor(private http: HttpClient) { }
  
  private API_AUTOS = 'http://localhost:3000/autos'

  /////LEER - GET////
  getAutos():Observable <any>{
    return this.http.get(this.API_AUTOS)
  }

 ////ACTUALIZAR - PUT////
  putAutos(auto: any): Observable <any>{
    return this.http.put(`${this.API_AUTOS}/${auto.id}`, auto)
  }

  ////ELIMINAR - DELETE////
  deleteAutoID(id: any): Observable <any>{
    return this.http.delete(`${this.API_AUTOS}/${id}`)
  }

  getAutoUnico(id:any): Observable <any>{
    return this.http.get(`${this.API_AUTOS}/${id}`)
    }

}
