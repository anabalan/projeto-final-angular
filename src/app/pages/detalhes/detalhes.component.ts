import { Component, OnInit } from '@angular/core';
import { HistoricoService } from '../../services/historico.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})

export class DetalhesComponent implements OnInit {
  disciplina;
  form;

  constructor(
    private historicoService: HistoricoService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    
    this.disciplina = this.historicoService.Disciplina(
      this.route.snapshot.params['sigla']
    );

    this.form = this.formBuilder.group({
      nota: '',
    });

   }

  ngOnInit(): void {

  }

  onSubmit(nota) {
    if (nota.nota > 10 || nota.nota < 0) {
      alert('Insira uma nota de 0 a 10!');
      this.form.reset();
    } else {
      this.historicoService.Nota(this.disciplina.sigla, nota.nota);
      this.form.reset();
      alert('Nota alterada!');
    }
  }

}
