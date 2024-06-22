import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignUpInputOtpPage } from './sign-up-input-otp.page';

describe('SignUpInputOtpPage', () => {
  let component: SignUpInputOtpPage;
  let fixture: ComponentFixture<SignUpInputOtpPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SignUpInputOtpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
