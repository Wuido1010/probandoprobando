import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearcuPage } from './crearcu.page';

const routes: Routes = [
  {
    path: '',
    component: CrearcuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearcuPageRoutingModule {}
