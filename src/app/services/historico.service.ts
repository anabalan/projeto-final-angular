import { Injectable } from '@angular/core';
import { Historico } from '../data/historico';

@Injectable({
  providedIn: 'root'
})

export class HistoricoService {
  constructor() { }

  Semestre() {
    return Historico;
  }

  Nota(sigla, nota) {
    Historico.map((disciplina) => disciplina.disciplinas).map((sub) => {
      sub.map((materia) => {
        if (materia.sigla == sigla) {
          materia.notaFinal = nota;
        }
      });
    });
  }

  Disciplina(sigla) {
    let getSigla = null;
    Historico.map((disciplina) => {
      disciplina.disciplinas.filter((obj) => {
        if (obj['sigla'] == sigla) {
          getSigla = obj;
        }
      });
    });
    return getSigla;
  }

}
