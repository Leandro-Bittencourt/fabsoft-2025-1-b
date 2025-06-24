import { Component } from '@angular/core';
import { Paciente } from '../model/paciente';
import { PacienteService } from '../service/paciente.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ElementRef, ViewChild } from '@angular/core';
import * as bootstrap from 'bootstrap';

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
    this.router.navigate(['pacientes/alterar', paciente.id]);
  }

  @ViewChild('myModal') modalElement!: ElementRef;
private modal!: bootstrap.Modal;

private pacienteSelecionado!: Paciente;

abrirConfirmacao(paciente:Paciente) {
  this.pacienteSelecionado = paciente;
  this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
  this.modal.show();
}

fecharConfirmacao() {
this.modal.hide();
}

confirmarExclusao() {
  this.pacienteService.excluirPaciente(this.pacienteSelecionado.id).subscribe(
      () => {
          this.fecharConfirmacao();
          this.pacienteService.getPacientes().subscribe(
            pacientes => {
              this.listaPacientes = pacientes;
            }
          );
      },
      error => {
          console.error('Erro ao excluir paciente:', error);
      }
  );
}
}


