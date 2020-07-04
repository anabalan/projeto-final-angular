import { Component, OnInit } from '@angular/core';
import { HistoricoService } from '../../services/historico.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {
  historico;
  constructor(private historicoService: HistoricoService) { }

  ngOnInit(): void {
    this.historico = this.historicoService.Semestre();
  }

}
