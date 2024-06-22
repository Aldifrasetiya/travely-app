import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.page.html',
  styleUrls: ['./seat.page.scss'],
})
export class SeatPage implements OnInit {
  selectedSeats: number [] = [];
  totalSeats = 11;
  totalPrice = 0;

  occupiedSeats: number[] = [6,10]; // Contoh kursi yang sudah terisi

  constructor(
    private router : Router,
  ) { }

  selectSeat(seatNumber: number) {
    if (!this.selectedSeats.includes(seatNumber)) {
      this.selectedSeats.push(seatNumber);
      this.totalPrice += 150000; // harga per seat
    } else {
      const index = this.selectedSeats.indexOf(seatNumber);
      this.selectedSeats.splice(index, 1);
      this.totalPrice -= 150000; // harga per seat
    }
  }

  getSeatColor(seatNumber: number): string {
    if (this.occupiedSeats.includes(seatNumber)) {
      return 'danger'; // Warna merah untuk kursi yang terisi
    }
    if (this.selectedSeats.includes(seatNumber)) {
      return 'primary'; // Warna biru untuk kursi yang dipilih
    }
    return 'dark'; // Warna default untuk kursi yang tersedia
  }

  proceed() {
    this.router.navigate(["tabs/home/info-penumpang"]);
    // tambahkan logika untuk mengirimkan data ke server atau melakukan aksi lainnya
  }

  ngOnInit() {
  }

}
