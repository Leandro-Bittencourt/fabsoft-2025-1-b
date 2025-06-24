import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medico } from '../model/medico';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  private apiUrl = 'http://localhost:8080/api/medicos';

  constructor(private http: HttpClient) {}

  getMedicoById(id: string): Observable<Medico> {
    return this.http.get<Medico>(`${this.apiUrl}/${id}`);
  }

  saveMedico(medico: Medico): Observable<Medico> {
    return this.http.post<Medico>(this.apiUrl, medico);
  }
}
