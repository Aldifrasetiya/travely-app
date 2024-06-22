import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  modes = ['date', 'date-time', 'month', 'mounth-year', 'time', 'time-date', 'year'];
  selectMode = 'date';
  showPicker = false;
  // dateValue = (new Date(), 'yyy-MM-dd') + 'T09:00:00.000Z';
  // formattedString = '';

  form = {
    email: localStorage.getItem("username"),
    password: localStorage.getItem("password")
  };

  images = [
    'https://source.unsplash.com/photos/1200x4/?travel-agency',
    'https://source.unsplash.com/photos/1200x4/?travel-agency',
    'https://source.unsplash.com/photos/1200x4/?travel-agency'
  ];

  swiperslidechange = [IonicSlides];
  modal: any;

  swiperSlideChange(e: any) {
    console.log('change', e);
  }

  fromLocation!: string;
  toLocation!: string;
  searchQuery: string = '';
  selectedFromLocation: any;
  selectedToLocation: any;
  // locations: string[] = ['Jakarta Barat', 'Jakarta Selatan', 'Jakarta Pusat', 'Jakarta Timur', 'Jakarta Utara'];
  locations: { provinsi: string, daerah: string }[] = [
    { provinsi: 'DKI Jakarta', daerah: 'Jakarta Barat' },
    { provinsi: 'DKI Jakarta', daerah: 'Jakarta Selatan' },
    { provinsi: 'DKI Jakarta', daerah: 'Jakarta Pusat' },
    { provinsi: 'DKI Jakarta', daerah: 'Jakarta Timur' },
    { provinsi: 'DKI Jakarta', daerah: 'Jakarta Utara' },
    { provinsi: 'Jawa Barat', daerah: 'Bandung' },
    { provinsi: 'Jawa Barat', daerah: 'Bekasi' },
    { provinsi: 'Jawa Barat', daerah: 'Bogor' },
    { provinsi: 'Jawa Barat', daerah: 'Depok' },
    { provinsi: 'Jawa Barat', daerah: 'Cirebon' },
  ];
  // filteredLocations: string[] = [];
  filteredLocations: { provinsi: string, daerah: string }[] = [];

  constructor(
    private router : Router,
  ) {
    this.filteredLocations = this.locations;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.router.navigate(["tabs/home/rute"]);
  }

  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }

  change($event: any){
    console.log($event);
  }

  filterLocations() {
    const query = this.searchQuery.toLowerCase();
    this.filteredLocations = this.locations.filter(location => 
      location.provinsi.toLowerCase().includes(query) || 
      location.daerah.toLowerCase().includes(query));
  }

  selectLocation(location: { provinsi: string, daerah: string }, type: string) {
    if (type === 'from') {
      this.fromLocation = `${location.daerah}, ${location.provinsi}`;
    } else if (type === 'to') {
      this.toLocation = `${location.daerah}, ${location.provinsi}`;
    }
    this.modal.dismiss();
  }

  getColor(location: any, type: string): string {
    if (type === 'from' && this.selectedFromLocation === location ) {
      return 'primary'; // Warna biru untuk kursi yang dipilih
    }
    if (type === 'to' && this.selectedToLocation === location) {
      return 'text primary';
    }
    return 'light'; // Warna default untuk kursi yang tersedia
  }
}


