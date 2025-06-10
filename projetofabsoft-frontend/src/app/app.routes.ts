import { Routes } from '@angular/router';
import { PacienteComponent }   from './paciente/paciente.component';
import { FormPacienteComponent } from './form-paciente/form-paciente.component';

export const routes: Routes = [
{ path: 'pacientes', component: PacienteComponent},
{ path: 'pacientes/novo', component: FormPacienteComponent},
];