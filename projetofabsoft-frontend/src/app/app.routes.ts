import { Routes } from '@angular/router';
import { PacienteComponent }   from './paciente/paciente.component';
import { FormPacienteComponent } from './form-paciente/form-paciente.component';
import { MedicoComponent }   from './medico/medico.component';

export const routes: Routes = [
    { path: 'pacientes', component: PacienteComponent },
    { path: 'pacientes/novo', component: FormPacienteComponent },
    { path: 'pacientes/alterar/:id', component: FormPacienteComponent },
  
    { path: 'medicos', component: MedicoComponent },
    { path: 'medicos/novo', component: MedicoComponent },
    { path: 'medicos/alterar/:id', component: MedicoComponent }
  ];
  