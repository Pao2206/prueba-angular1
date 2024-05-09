import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private http: HttpClient) { }

  private API_EMPLEADOS = "https://randomuser.me/api/?results=16"

  getEmpleados(): Observable <any> {
    return this.http.get(this.API_EMPLEADOS)
  }

  
  getEmpleadoUnico(id:any): Observable <any>{
    return this.http.get(`${this.API_EMPLEADOS}/${id}`)
  }

}
