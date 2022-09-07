import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearcuproPage } from './crearcupro.page';

const routes: Routes = [
  {
    path: '',
    component: CrearcuproPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearcuproPageRoutingModule {}
