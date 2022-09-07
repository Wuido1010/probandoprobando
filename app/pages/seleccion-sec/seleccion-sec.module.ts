import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionSecPageRoutingModule } from './seleccion-sec-routing.module';

import { SeleccionSecPage } from './seleccion-sec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionSecPageRoutingModule
  ],
  declarations: [SeleccionSecPage]
})
export class SeleccionSecPageModule {}
