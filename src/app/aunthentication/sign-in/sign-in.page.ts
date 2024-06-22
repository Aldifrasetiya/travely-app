import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';

interface LoginResponse {
  token: string;
  user: {
    id: number;
    // Tambahkan properti lain jika ada dalam response
  };
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  
  email!: string;
  password!: string;

  constructor(
    private router: Router,
    private http: HttpClient,
    private storage: Storage,
    private alertController: AlertController
  ) {
    this.init();
  }

  async init() {
    await this.storage.create();
  }

  ngOnInit() {}

  async onLogin() {
    const loginData = {
      email: this.email,
      password: this.password,
    };

    this.http.post<LoginResponse>('http://127.0.0.1:8000/api/login', loginData).subscribe(async res => {
      console.log(res);
      const token = res.token;
      // const userId = res.user.id;
      
      await this.storage.set('auth-token', token);
      // await this.storage.set('id', userId);
      this.router.navigate(['/tabs/home']);

      const alert = await this.alertController.create({
        header: 'Login Berhasil',
        message: 'Selamat datang!',
        buttons: ['OK']
      });

      await alert.present();

    }, async err => {
      console.log(err);
      
      const alert = await this.alertController.create({
        header: 'Login Gagal',
        message: 'Silakan cek kembali email dan password Anda.',
        buttons: ['OK']
      });

      await alert.present();
    });
  }
}


    // localStorage.setItem("username", this.form.username);
    // localStorage.setItem("password", this.form.password);

    // console.log("Username : " + this.form.username);
    // console.log("Password : " + this.form.password);
    // this.router.navigate(["/tabs/home"]);
