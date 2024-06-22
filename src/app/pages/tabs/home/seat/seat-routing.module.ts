import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeatPage } from './seat.page';

const routes: Routes = [
  {
    path: '',
    component: SeatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeatPageRoutingModule {}
