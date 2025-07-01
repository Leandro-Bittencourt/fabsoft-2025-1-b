import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PacienteService } from '../service/paciente.service';
import { MedicoService } from '../services/medico.service';
import { ConsultaService } from '../services/consulta.service';

@Component({
  selector: 'app-agendamento-consulta',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agendamento.component.html',
})
export class AgendamentoComponent implements OnInit {
  listaPacientes: any[] = [];
  listaMedicos: any[] = [];
  consulta = { pacienteId: '', medicoId: '', data: '', hora: '' };

  constructor(
    private pacienteService: PacienteService,
    private medicoService: MedicoService,
    private consultaService: ConsultaService
  ) {}

  ngOnInit() {
    this.pacienteService.getPacientes().subscribe(pacientes => this.listaPacientes = pacientes);
    this.medicoService.getMedicos().subscribe(medicos => this.listaMedicos = medicos);
  }

  salvar() {
    this.consultaService.save(this.consulta).subscribe({
      next: () => {
        alert('Consulta agendada com sucesso!');
        this.consulta = { pacienteId: '', medicoId: '', data: '', hora: '' };
      },
      error: () => {
        alert('Erro ao agendar consulta.');
      }
    });
  }
}