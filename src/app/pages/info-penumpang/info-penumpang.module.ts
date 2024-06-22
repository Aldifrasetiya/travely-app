import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPenumpangPageRoutingModule } from './info-penumpang-routing.module';

import { InfoPenumpangPage } from './info-penumpang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPenumpangPageRoutingModule
  ],
  declarations: [InfoPenumpangPage]
})
export class InfoPenumpangPageModule {}
