import { Routes } from '@angular/router';
import { PacienteComponent } from './paciente/paciente.component';
import { FormPacienteComponent } from './form-paciente/form-paciente.component';
import { FormMedicoComponent } from './form-medico/form-medico.component';
import { MedicoListComponent } from './medico-list/medico-list.component';
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
}

export const routes: Routes = [
  { path: 'pacientes', component: PacienteComponent },
  { path: 'pacientes/novo', component: FormPacienteComponent },
  { path: 'pacientes/alterar/:id', component: FormPacienteComponent },

  { path: 'medicos', component: MedicoListComponent },
  { path: 'medicos/novo', component: FormMedicoComponent },
  { path: 'medicos/alterar/:id', component: FormMedicoComponent },

  {
  path: 'consultas',
  loadComponent: () => import('./consultas/agendamento.component').then(m => m.AgendamentoComponent)
},

{
  path: '',
  loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
}

];
