import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicoService } from '../services/medico.service';
import { Medico } from '../model/medico';

@Component({
  selector: 'app-medico-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medico-list.component.html'
})
export class MedicoListComponent implements OnInit {
  medicos: Medico[] = [];

  constructor(private medicoService: MedicoService) {}

  ngOnInit() {
    this.medicoService.getAll().subscribe(data => this.medicos = data);
  }

  alterar(medico: Medico) {
    // Redireciona para a página de edição do médico (ajuste a rota conforme seu app)
    window.location.href = `/medicos/editar/${medico.id}`;
  }

  abrirConfirmacao(medico: Medico) {
    if (confirm(`Deseja realmente excluir o médico ${medico.nome}?`)) {
      this.excluir(medico.id);
    }
  }

  excluir(id: number) {
    this.medicoService.excluir(id).subscribe(() => {
      this.medicos = this.medicos.filter(m => m.id !== id);
    });
  }
}