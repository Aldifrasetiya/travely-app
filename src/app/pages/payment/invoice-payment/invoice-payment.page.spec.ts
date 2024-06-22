import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvoicePaymentPage } from './invoice-payment.page';

describe('InvoicePaymentPage', () => {
  let component: InvoicePaymentPage;
  let fixture: ComponentFixture<InvoicePaymentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InvoicePaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
