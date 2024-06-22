import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'rute',
    loadChildren: () => import('./rute/rute.module').then( m => m.RutePageModule)
  },
  {
    path: 'info-penumpang',
    loadChildren: () => import('./info-penumpang/info-penumpang.module').then( m => m.InfoPenumpangPageModule)
  },
  {
    path: 'rincian-pesanan',
    loadChildren: () => import('./rincian-pesanan/rincian-pesanan.module').then( m => m.RincianPesananPageModule)
  },
  {
    path: 'jadwal',
    loadChildren: () => import('./jadwal/jadwal.module').then( m => m.JadwalPageModule)
  },
  {
    path: 'seat',
    loadChildren: () => import('./seat/seat.module').then( m => m.SeatPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
