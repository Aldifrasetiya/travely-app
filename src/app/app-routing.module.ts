import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },

  {
    path: 'sign-up',
    loadChildren: () => import('./aunthentication/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./aunthentication/sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: 'reservasi-tiket',
    loadChildren: () => import('./pages/reservasi-tiket/reservasi-tiket.module').then( m => m.ReservasiTiketPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  // {
  //   path: 'rute',
  //   loadChildren: () => import('./pages/rute/rute.module').then( m => m.RutePageModule)
  // },
  {
    path: 'jadwal',
    loadChildren: () => import('./pages/jadwal/jadwal.module').then( m => m.JadwalPageModule)
  },
  {
    path: 'seat',
    loadChildren: () => import('./pages/seat/seat.module').then( m => m.SeatPageModule)
  },
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'sign-up-otp',
    loadChildren: () => import('./aunthentication/sign-up-otp/sign-up-otp.module').then( m => m.SignUpOtpPageModule)
  },
  {
    path: 'sign-up-input-otp',
    loadChildren: () => import('./aunthentication/sign-up-input-otp/sign-up-input-otp.module').then( m => m.SignUpInputOtpPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'info-penumpang',
    loadChildren: () => import('./pages/info-penumpang/info-penumpang.module').then( m => m.InfoPenumpangPageModule)
  },
  {
    path: 'rincian-pesanan',
    loadChildren: () => import('./pages/rincian-pesanan/rincian-pesanan.module').then( m => m.RincianPesananPageModule)
  },
  {
    path: 'choose-payment',
    loadChildren: () => import('./pages/payment/choose-payment/choose-payment.module').then( m => m.ChoosePaymentPageModule)
  },
  {
    path: 'invoice-payment',
    loadChildren: () => import('./pages/payment/invoice-payment/invoice-payment.module').then( m => m.InvoicePaymentPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./aunthentication/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
