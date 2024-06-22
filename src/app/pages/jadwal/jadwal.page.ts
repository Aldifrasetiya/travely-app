import { Component,  ViewChild  } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-jadwal',
  templateUrl: './jadwal.page.html',
  styleUrls: ['./jadwal.page.scss'],
})

export class JadwalPage {

  // @ViewChild(IonModal) modal: IonModal;

  // message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  // name: string;

  // cancel() {
  //   this.modal.dismiss(null, 'cancel');
  // }

  // confirm() {
  //   this.modal.dismiss(this.name, 'confirm');
  // }

  // onWillDismiss(event: Event) {
  //   const ev = event as CustomEvent<OverlayEventDetail<string>>;
  //   if (ev.detail.role === 'confirm') {
  //     this.message = `Hello, ${ev.detail.data}!`;
  //   }
  // }

  // constructor(public popoverController: PopoverController) {}

  // async openDetails(e: Event) {
  //   const popover = await this.popoverController.create({
  //     component: JadwalPage,
  //     event: e,
  //   });

  //   await popover.present();

  //   const { role } = await popover.onDidDismiss();
  //   console.log(`Popover dismissed with role: ${role}`);
  // }

  // constructor(private modalCtrl:ModalController,
  //   private popoverCtrl: PopoverController) { }

  // async openDetails() {
  //   const modal = await this.modalCtrl.create({
  //     component: JadwalPage,
  //     cssClass: 'small-modal'
  //   });

  //   await modal.present();
  // }

  // async openTransparentModal() {
  //   const modal = await this.modalCtrl.create({
  //     component:JadwalPage,
  //     cssClass: 'transparent-modal'
  //   });

  //   await modal.present();
  // }

  // async openPopover(ev: any) {
  //   const popover = await this.popoverCtrl.create({
  //     component: JadwalPage,
  //   })
  // }

  // @ViewChild('popover')
  // popover!: { event: Event; };

  // isOpen = false;

  // presentPopover(e: Event) {
  //   this.popover.event = e;
  //   this.isOpen = true;
  // }
}

