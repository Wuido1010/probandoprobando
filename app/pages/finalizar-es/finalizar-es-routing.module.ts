import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalizarEsPage } from './finalizar-es.page';

const routes: Routes = [
  {
    path: '',
    component: FinalizarEsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinalizarEsPageRoutingModule {}
