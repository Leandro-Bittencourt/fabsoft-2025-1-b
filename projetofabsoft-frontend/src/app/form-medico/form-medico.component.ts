import { Component } from '@angular/core';
import { Medico } from '../model/medico';
import { MedicoService } from '../service/medico.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-form-medico',
  templateUrl: './form-medico.component.html',
  styleUrls: ['./form-medico.component.css'],
  imports: [HttpClientModule, FormsModule],
})
export class FormMedicoComponent {
  medico: Medico = new Medico();

  constructor(
    private medicoService: MedicoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.medicoService.getMedicoById(id).subscribe(m => {
        this.medico = m;
      });
    }
  }

  salvar() {
    this.medicoService.saveMedico(this.medico).subscribe(() => {
      this.router.navigate(['medicos']);
    });
  }
}
