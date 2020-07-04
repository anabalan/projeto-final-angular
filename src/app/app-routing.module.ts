import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { HistoricoComponent } from './pages/historico/historico.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'historico', component: HistoricoComponent},
  {path: 'detalhes/:sigla', component: DetalhesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
