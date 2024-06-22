import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  selectedTab: any;

  constructor() { }

  ngOnInit() {
  }

  setCurrentTab(event: any) {
    this.selectedTab = event.tab;
  }
}
