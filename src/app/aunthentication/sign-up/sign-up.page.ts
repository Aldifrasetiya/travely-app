import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from '../../auth.service';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(
    // private authService: AuthService,
    private router : Router,
    private http: HttpClient,
    private alertController: AlertController,
  ) { }

  ngOnInit() {
  }

  name!: string;
  email!: string;
  password!: string;
  confirmPassword!: string;
  no_telp!: string;
  alamat!: string;

  // async onRegister() {

  //   const registerData = {
  //     name: this.name,
  //     email: this.email,
  //     password: this.password,
  //     password_confirmation: this.confirmPassword,
  //     no_telp: this.no_telp,
  //     alamat: this.alamat
  //   };

  // }

  // this.http.post<any>('http://127.0.0.1:8000/api/register', registerData)
  // .subscribe(
  //   async response => {
  //     console.log('Registrasi berhasil', response);
  //     alert('Registrasi Berhasil! Silahkan cek email anda untuk verifikasi akun.');
  //     this.router.navigate(['/sign-in']);
  //   },
  //   async err => {
  //     console.log(err);
  //     alert('Registrasi Gagal');
  //   }
  // );

  onRegister() {

    const registerData = {
      name: this.name,
      email: this.email,
      password: this.password,
      password_confirmation: this.confirmPassword,
      no_telp: this.no_telp,
      alamat: this.alamat
    };

    this.http.post<any>('http://127.0.0.1:8000/api/register', registerData).subscribe(res => {
      // alert('Registrasi Berhasil! Silahkan cek email anda untuk verifikasi akun.');

      const alert = this.alertController.create({
        header: 'Registrasi Berhasil',
        message: 'Akun Anda Berhasil didaftarkan',
        buttons: ['OK']
      });

      this.router.navigate(['/sign-in']);
    }, err => {
      console.log(err);
      // alert('Registrasi Gagal');
      const alert = this.alertController.create({
        header: 'Registrasi Gagal',
        message: 'Silahkan Coba lagi',
        buttons: ['LOGIN ULANG']
      });
    });
  }

}
