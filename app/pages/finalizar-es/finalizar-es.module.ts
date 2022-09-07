import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalizarEsPageRoutingModule } from './finalizar-es-routing.module';

import { FinalizarEsPage } from './finalizar-es.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalizarEsPageRoutingModule
  ],
  declarations: [FinalizarEsPage]
})
export class FinalizarEsPageModule {}
