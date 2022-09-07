import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BienvenidoalPage } from './bienvenidoal.page';

const routes: Routes = [
  {
    path: '',
    component: BienvenidoalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BienvenidoalPageRoutingModule {}
