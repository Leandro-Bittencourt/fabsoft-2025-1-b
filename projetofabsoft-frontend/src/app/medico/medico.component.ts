import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Medico } from '../model/medico';
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
  // Médico fixo já cadastrado com os dados fornecidos
  listaMedicos: Medico[] = [
    { id: 1, nome: 'Claudecir Evandro Gambeta', especialidade: 'Joelho', crm: '11114-SC' }
  ];
  // Formulário sempre limpo para novo cadastro
  medico: Medico = { id: 0, nome: '', especialidade: '', crm: '' };

  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;
  private medicoSelecionado!: Medico;

  constructor(
    private router: Router 
  ) {}

  ngOnInit() {
    // Não carrega do backend, mantém apenas o médico fixo
  }

  salvar() {
    // Adiciona o novo médico à lista local (não envia para backend)
    const novoId = this.listaMedicos.length > 0 ? Math.max(...this.listaMedicos.map(m => m.id)) + 1 : 1;
    const novoMedico = { ...this.medico, id: novoId };
    this.listaMedicos.push(novoMedico);
    this.medico = { id: 0, nome: '', especialidade: '', crm: '' };
  }

  novo() {
    this.medico = { id: 0, nome: '', especialidade: '', crm: '' };
  }

  alterar(medico: Medico) {
    this.medico = { ...medico };
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
    this.listaMedicos = this.listaMedicos.filter(m => m.id !== this.medicoSelecionado.id);
    this.fecharConfirmacao();
  }
}