import { GuardService } from './../guard.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


interface Models {
  email: string;
  password: string;
  remember: boolean;
}


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})


export class LoginPageComponent {
  models: Models = {
    email: '',
    password: '',
    remember: false
  };

  constructor(private http: HttpClient, private gaurd: GuardService) { }
  submit() {
    console.log(this.models);
    console.log(this.http.get('/login'));
    return this.http.get('/').subscribe();
  }

}
