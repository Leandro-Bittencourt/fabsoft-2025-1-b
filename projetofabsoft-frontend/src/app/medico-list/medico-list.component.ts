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
}