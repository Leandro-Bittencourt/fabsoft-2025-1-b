import { Component } from '@angular/core';
import { Paciente } from '../model/paciente';
import { PacienteService } from '../service/paciente.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-form-paciente',
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-paciente.component.html',
  styleUrl: './form-paciente.component.css',
  providers: [PacienteService, Router]
})
export class FormPacienteComponent {
    paciente: Paciente = new Paciente();
    
    constructor(
      private pacienteService:PacienteService,
      private router:Router,
      private activeRouter: ActivatedRoute
    ) {
      const id = this.activeRouter.snapshot.paramMap.get('id');

      if (id) {
        this.pacienteService.getPacienteById(id).subscribe(paciente => {
          this.paciente = paciente;
        });
      }
    }

    salvar(){
      this.pacienteService.savePaciente(this.paciente) 
        .subscribe(resultado => {
          this.router.navigate(['pacientes']);
        });
    }

    voltar() {
  window.location.href = '/pacientes';
}
}
