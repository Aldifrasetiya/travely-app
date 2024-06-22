import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChoosePaymentPage } from './choose-payment.page';

describe('ChoosePaymentPage', () => {
  let component: ChoosePaymentPage;
  let fixture: ComponentFixture<ChoosePaymentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChoosePaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
