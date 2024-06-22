import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tiket',
  templateUrl: './tiket.page.html',
  styleUrls: ['./tiket.page.scss'],
})
export class TiketPage implements OnInit {
  selectedSegment: string = 'booking';
  transactions: any = {
    pesanan: [],
    riwayat: []
  };

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
  }


  // @ViewChild('popover')
  // popover!: { event: Event; };

  // isOpen = false;

  // presentPopover(e: Event) {
  //   this.popover.event = e;
  //   this.isOpen = true;
  // }

  constructor() { }

  ngOnInit() {
  }

}
