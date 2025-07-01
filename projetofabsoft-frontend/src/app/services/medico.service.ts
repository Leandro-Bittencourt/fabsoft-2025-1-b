import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medico } from '../model/medico'; 

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  private apiUrl = '/api/medico';

  constructor(private http: HttpClient) {}

  save(medico: Medico): Observable<Medico> {
    return this.http.post<Medico>(this.apiUrl, medico);
  }

  getAll(): Observable<Medico[]> {
    return this.http.get<Medico[]>(this.apiUrl);
  }

  getById(id: number): Observable<Medico> {
    return this.http.get<Medico>(`${this.apiUrl}/${id}`);
  }

  update(id: number, medico: Medico): Observable<Medico> {
    return this.http.put<Medico>(`${this.apiUrl}/${id}`, medico);
  }

  delete(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  excluir(id: number | undefined): Observable<void> {
    return this.delete(id);
  }

  excluirMedico(id: number | undefined): Observable<void> {
    return this.delete(id);
  }

  getMedicos(): Observable<Medico[]> {
    return this.getAll();
  }
}