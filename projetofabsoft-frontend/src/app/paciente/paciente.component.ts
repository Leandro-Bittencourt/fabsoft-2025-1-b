import { Component } from '@angular/core';
import { Paciente } from '../model/paciente';
import { PacienteService } from '../service/paciente.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente',
  imports: [ HttpClientModule, CommonModule],
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.css',
  providers: [PacienteService, Router]
})
export class PacienteComponent {
  listaPacientes: Paciente[] = [];

  constructor(
    private pacienteService: PacienteService,
    private router:Router 
  ) {}

  novo(){
    this.router.navigate(['pacientes/novo']);
  }

  ngOnInit(){
    console.log("Carregando pacientes...");
    this.pacienteService.getPacientes().subscribe(
      pacientes => {
        this.listaPacientes = pacientes;
      }
    );
  }

  alterar(paciente:Paciente){
    this.router.navigate(['pacientes/aterar', paciente.id]);
  }
}


