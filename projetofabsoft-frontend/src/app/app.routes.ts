import { Routes } from '@angular/router';
import { PacienteComponent } from './paciente/paciente.component';
import { FormPacienteComponent } from './form-paciente/form-paciente.component';
import { FormMedicoComponent } from './form-medico/form-medico.component';
import { MedicoListComponent } from './medico-list/medico-list.component';

export const routes: Routes = [
  { path: 'pacientes', component: PacienteComponent },
  { path: 'pacientes/novo', component: FormPacienteComponent },
  { path: 'pacientes/alterar/:id', component: FormPacienteComponent },

  { path: 'medicos', component: MedicoListComponent },
  { path: 'medicos/novo', component: FormMedicoComponent },
  { path: 'medicos/alterar/:id', component: FormMedicoComponent }
];
