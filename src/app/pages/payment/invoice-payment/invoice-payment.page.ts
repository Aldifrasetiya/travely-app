import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-payment',
  templateUrl: './invoice-payment.page.html',
  styleUrls: ['./invoice-payment.page.scss'],
})
export class InvoicePaymentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  setResult(ev: any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }

}
