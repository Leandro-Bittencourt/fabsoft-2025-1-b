import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Medico } from '../model/medico';
import { MedicoService } from '../services/medico.service';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-medico',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {
  listaMedicos: Medico[] = [];

  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;
  private medicoSelecionado!: Medico;

  constructor(
    private medicoService: MedicoService,
    private router: Router 
  ) {}

  ngOnInit() {
    this.carregarMedicos();
  }

  carregarMedicos() {
    this.medicoService.getMedicos().subscribe(
      medicos => {
        this.listaMedicos = medicos;
      }
    );
  }

  novo() {
    this.router.navigate(['medicos/novo']);
  }

  alterar(medico: Medico) {
    this.router.navigate(['medicos/alterar', medico.id]);
  }

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
        this.carregarMedicos();
      },
      error => {
        console.error('Erro ao excluir médico:', error);
      }
    );
  }
}
