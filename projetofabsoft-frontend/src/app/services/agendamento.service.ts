import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AgendamentoService {
  private apiUrl = '/api/agendamento';

  constructor(private http: HttpClient) {}

  save(agendamento: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, agendamento);
  }

  listar(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  alterar(id: number, agendamento: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, agendamento);
  }

  excluir(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}