import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BienvenidoalPageRoutingModule } from './bienvenidoal-routing.module';

import { BienvenidoalPage } from './bienvenidoal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BienvenidoalPageRoutingModule
  ],
  declarations: [BienvenidoalPage]
})
export class BienvenidoalPageModule {}
