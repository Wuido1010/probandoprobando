import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearcuPageRoutingModule } from './crearcu-routing.module';

import { CrearcuPage } from './crearcu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearcuPageRoutingModule
  ],
  declarations: [CrearcuPage]
})
export class CrearcuPageModule {}
