import { Injectable } from '@angular/core';
import { Paciente } from '../model/paciente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  apiURL = "http://localhost:8080/api/v1/paciente";

  constructor(private http:HttpClient) { }

  getPacientes(){
    return this.http.get<Paciente[]>(this.apiURL);
  }

  savePaciente(paciente:Paciente){
    return this.http.post(this.apiURL,paciente);
  }
}