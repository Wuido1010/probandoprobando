import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioEsPageRoutingModule } from './inicio-es-routing.module';

import { InicioEsPage } from './inicio-es.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioEsPageRoutingModule
  ],
  declarations: [InicioEsPage]
})
export class InicioEsPageModule {}
