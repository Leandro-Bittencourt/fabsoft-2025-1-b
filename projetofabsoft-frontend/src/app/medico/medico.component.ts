import { Component, ElementRef, ViewChild } from '@angular/core';
import { Medico } from '../model/medico';
import { MedicoService } from '../service/medico.service';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent {
  listaMedicos: Medico[] = [];

  constructor(
    private medicoService: MedicoService,
    private router: Router 
  ) {}

  novo() {
    this.router.navigate(['medicos/novo']);
  }

  ngOnInit() {
    console.log("Carregando médicos...");
    this.medicoService.getMedicos().subscribe(
      medicos => {
        this.listaMedicos = medicos;
      }
    );
  }

  alterar(medico: Medico) {
    this.router.navigate(['medicos/alterar', medico.id]);
  }

  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;
  private medicoSelecionado!: Medico;

  abrirConfirmacao(medico: Medico) {
    this.medicoSelecionado = medico;
    this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
  }

  fecharConfirmacao() {
    this.modal.hide();
  }

  confirmarExclusao() {
    this.medicoService.excluirMedico(this.medicoSelecionado.id).subscribe(
      () => {
        this.fecharConfirmacao();
        this.medicoService.getMedicos().subscribe(
          medicos => {
            this.listaMedicos = medicos;
          }
        );
      },
      error => {
        console.error('Erro ao excluir médico:', error);
      }
    );
  }
}
