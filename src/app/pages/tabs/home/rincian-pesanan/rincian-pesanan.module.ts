import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RincianPesananPageRoutingModule } from './rincian-pesanan-routing.module';

import { RincianPesananPage } from './rincian-pesanan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RincianPesananPageRoutingModule
  ],
  declarations: [RincianPesananPage]
})
export class RincianPesananPageModule {}
