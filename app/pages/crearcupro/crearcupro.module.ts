import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearcuproPageRoutingModule } from './crearcupro-routing.module';

import { CrearcuproPage } from './crearcupro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearcuproPageRoutingModule
  ],
  declarations: [CrearcuproPage]
})
export class CrearcuproPageModule {}
