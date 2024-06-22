import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpInputOtpPage } from './sign-up-input-otp.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpInputOtpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpInputOtpPageRoutingModule {}
