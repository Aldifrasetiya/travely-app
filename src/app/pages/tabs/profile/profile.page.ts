import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private router : Router,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigate(["edit-profile"]);
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
        this.router.navigate(["sign-in"]);
      },
    },
  ];

  setResult(ev: any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }


}
