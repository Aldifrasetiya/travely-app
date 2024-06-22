import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeatPageRoutingModule } from './seat-routing.module';

import { SeatPage } from './seat.page';

import { FocusDirective } from './focus.directive';

// import { BrowserModule } from '@angular/platform-browser';
// import { RouteReuseStrategy } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeatPageRoutingModule,
    // SeatPage
    // IonicRouteStrategy,
    // BrowserModule
  ],
  declarations: [
    SeatPage,
    FocusDirective
  ],
  
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // // entryComponents: [],
  // providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  // bootstrap: [SeatPage],
})
export class SeatPageModule {}
