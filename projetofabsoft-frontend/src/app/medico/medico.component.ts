import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Medico } from '../model/medico';
import { MedicoService } from '../services/medico.service';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-medico',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {
  listaMedicos: Medico[] = [];
  medico = { id:0, nome: '', especialidade: '', crm: '' };

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

  salvar() {
  this.medicoService.save(this.medico).subscribe({
    next: (novoMedico) => {
      this.carregarMedicos();
      this.medico = { id: 0, nome: '', especialidade: '', crm: '' };
    },
    error: (err) => {
      console.error('Erro ao salvar médico:', err);
    }
  });
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