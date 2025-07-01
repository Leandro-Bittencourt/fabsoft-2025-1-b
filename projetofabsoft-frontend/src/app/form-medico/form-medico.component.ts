import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MedicoService } from '../services/medico.service';
import { Medico } from '../model/medico';

@Component({
  selector: 'app-form-medico',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './medico-form.component.html',
  styleUrls: ['./form-medico.component.css']
})
export class FormMedicoComponent {
  medico: Medico = { id: 0, nome: '', especialidade: '', crm: '' }; 
  mensagem: string | null = null;
  erro: boolean = false;

  constructor(private medicoService: MedicoService) {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.medicoService.save(this.medico).subscribe({
        next: () => {
          this.mensagem = 'Médico cadastrado com sucesso!';
          this.erro = false;
          form.resetForm();
          this.medico = { id: 0, nome: '', especialidade: '', crm: '' };
        },
        error: () => {
          this.mensagem = 'Erro ao cadastrar médico.';
          this.erro = true;
        }
      });
    } else {
      this.mensagem = 'Preencha todos os campos obrigatórios.';
      this.erro = true;
    }
  }

  voltar() {
  window.location.href = '/medicos';
}
}