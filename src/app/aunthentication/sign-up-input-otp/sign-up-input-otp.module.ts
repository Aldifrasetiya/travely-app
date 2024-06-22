import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpInputOtpPageRoutingModule } from './sign-up-input-otp-routing.module';

import { SignUpInputOtpPage } from './sign-up-input-otp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpInputOtpPageRoutingModule
  ],
  declarations: [SignUpInputOtpPage]
})
export class SignUpInputOtpPageModule {}
