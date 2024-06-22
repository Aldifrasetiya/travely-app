import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RincianPesananPage } from './rincian-pesanan.page';

const routes: Routes = [
  {
    path: '',
    component: RincianPesananPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RincianPesananPageRoutingModule {}
