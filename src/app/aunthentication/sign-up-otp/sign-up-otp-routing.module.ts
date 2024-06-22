import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpOtpPage } from './sign-up-otp.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpOtpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpOtpPageRoutingModule {}
