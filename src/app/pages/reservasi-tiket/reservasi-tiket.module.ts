import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservasiTiketPageRoutingModule } from './reservasi-tiket-routing.module';

import { ReservasiTiketPage } from './reservasi-tiket.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservasiTiketPageRoutingModule
  ],
  declarations: [ReservasiTiketPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ReservasiTiketPageModule {}
