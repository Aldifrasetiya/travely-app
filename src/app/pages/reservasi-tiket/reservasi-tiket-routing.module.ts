import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservasiTiketPage } from './reservasi-tiket.page';

const routes: Routes = [
  {
    path: '',
    component: ReservasiTiketPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservasiTiketPageRoutingModule {}
