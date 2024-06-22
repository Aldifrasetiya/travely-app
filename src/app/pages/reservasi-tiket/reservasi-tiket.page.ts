import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonicSlides } from '@ionic/angular';


@Component({
  selector: 'app-reservasi-tiket',
  templateUrl: './reservasi-tiket.page.html',
  styleUrls: ['./reservasi-tiket.page.scss'],
  // imports: [IonicModule],
})
export class ReservasiTiketPage implements OnInit {

  form = {
    email: localStorage.getItem("username"),
    password: localStorage.getItem("password")
  }

  images = [
    'https://source.unsplash.com/photos/1200x4/?travel-agency',
    'https://source.unsplash.com/photos/1200x4/?travel-agency',
    'https://source.unsplash.com/photos/1200x4/?travel-agency'
  ];

  swiperslidechange = [IonicSlides];

  swiperSlideChange(e: any){
    console.log('change', e);
  }

  constructor(
  ) { }

  ngOnInit():void {
  }

}


