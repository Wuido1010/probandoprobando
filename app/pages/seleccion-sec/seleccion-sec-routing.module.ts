import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionSecPage } from './seleccion-sec.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionSecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionSecPageRoutingModule {}
