import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ConsultaService {
  private apiUrl = '/api/consulta';

  constructor(private http: HttpClient) {}

  save(consulta: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, consulta);
  }

  listar(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  alterar(id: number, consulta: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, consulta);
  }

  excluir(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}