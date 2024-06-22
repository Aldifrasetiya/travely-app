import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignUpOtpPage } from './sign-up-otp.page';

describe('SignUpOtpPage', () => {
  let component: SignUpOtpPage;
  let fixture: ComponentFixture<SignUpOtpPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SignUpOtpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
