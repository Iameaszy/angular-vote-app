import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainGuardService } from '../main-guard.service';
import { Router } from '@angular/router';

interface Models {
  email: string;
  passwd: string;
  remember: boolean;
}

const httpOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true,
};
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  models: Models = {
    email: '',
    passwd: '',
    remember: false,
  };

  constructor(
    private http: HttpClient,
    private guard: MainGuardService,
    private router: Router,
  ) {}
  submit() {
    console.log(this.models);
    this.http
      .post(
        'http://localhost:3000/login',
        JSON.stringify(this.models),
        httpOption,
      )
      .subscribe(
        data => {
          if (Array.isArray(data)) {
            const user = data[0].user;
            sessionStorage.setItem('pollway', JSON.stringify(user));
            this.router.navigate(['/']);
          } else {
            localStorage.setItem('pollway', JSON.stringify(data));
            this.router.navigate(['/']);
          }
        },
        err => console.log(err),
      );
  }
}
