import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioEsPage } from './inicio-es.page';

const routes: Routes = [
  {
    path: '',
    component: InicioEsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioEsPageRoutingModule {}
