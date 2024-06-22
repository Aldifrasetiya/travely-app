import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoPenumpangPage } from './info-penumpang.page';

const routes: Routes = [
  {
    path: '',
    component: InfoPenumpangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPenumpangPageRoutingModule {}
