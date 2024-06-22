import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
// import { StatusBar } from '@capacitor/status-bar';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    // private statusBar: StatusBar,
    public router:Router
  ) {
    // this.initializeApp();
  }

  // initializeApp(){
  //   this.platform.ready().then(() => {
  //     this.router.navigateByUrl('splash')
  //   })
  // }
}
