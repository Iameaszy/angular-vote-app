import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdminMainAuthService } from '../admin-main-auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpParamsOptions } from '@angular/common/http/src/params';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  loginForm: FormGroup;
  errMsg: any = null;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AdminMainAuthService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      passwd: ['', Validators.required],
      remember: ''
    });
  }

  get name() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('passwd');
  }

  get remember() {
    return this.loginForm.get('remember');
  }

  ngOnInit() { }
  logIn() {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };
    const body = JSON.stringify(this.loginForm.value);
    this.http
      .post('http://localhost:3000/admin/login', body, httpOption)
      .subscribe(
        (data: { payload: any, token: string, message?: string }) => {
          console.log('data:', data);
          if (data && data.payload && data.token) {
            const payload = JSON.stringify(data);
            sessionStorage.setItem('pollway', payload);
            localStorage.setItem('pollway', payload);
            this.authService.token = data.token;
            console.log('data set');
            this.router.navigate(['/admin'], { skipLocationChange: true, queryParams: { id: data.payload.name } });
          } else if (typeof data === 'boolean') {
            this.authService.allow = true;
            this.router.navigate(['/admin'], { skipLocationChange: true });
          }
          else {
            this.errMsg = data.message;
            this.router.navigateByUrl('/admin/login#errMsg');
          }
        },
        err => {
          if (err) {
            this.errMsg = err.message;
            this.router.navigateByUrl('/admin/login#errMsg');
            return console.log(err);
          }
        }
      );
  }
}
