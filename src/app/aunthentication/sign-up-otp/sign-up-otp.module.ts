import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpOtpPageRoutingModule } from './sign-up-otp-routing.module';

import { SignUpOtpPage } from './sign-up-otp.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpOtpPageRoutingModule,
    HttpClientModule
  ],
  declarations: [SignUpOtpPage]
})
export class SignUpOtpPageModule {}
