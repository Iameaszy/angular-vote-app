import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdminMainAuthService } from '../admin-main-auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpParamsOptions } from '@angular/common/http/src/params';

interface Data {
  payload: any;
  message?: string;
  token: string;
}
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
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
      remember: '',
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

  ngOnInit() {}
  // function to handle our login action
  logIn() {
    // http options for our request
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: true,
    };

    // retrieve the value entered by the admin user
    const body = JSON.stringify(this.loginForm.value);
    // make http request  to our nodejs back end
    this.http
      .post('http://localhost:3000/admin/login', body, httpOption)
      .subscribe(
        (data: Data) => {
          /* If data sent by the server is an object with valid properties,
              store the data in both sessionStorage(only valid until tab is closed) and
              localStorage(no expiry date). We do this because data retrieval from sessionStorage is faster */
          if (data && data.payload && data.token) {
            // convert the data from the server into a JSON file
            const payload = JSON.stringify(data);
            // store the data in sessionStorage
            sessionStorage.setItem('pollway', payload);
            // store the data in localStorage
            localStorage.setItem('pollway', payload);
            // save the token in a service for verification
            this.authService.token = data.token;

            this.router.navigate([`/admin/profiles/${data.payload.name}`], {
              queryParams: { id: data.payload.email },
              queryParamsHandling: 'preserve',
            });
          } else if (Array.isArray(data)) {
            localStorage.removeItem('pollway');
            sessionStorage.setItem('pollway', JSON.stringify(data));

            this.router.navigate([`/admin/profiles/${data[0].user.name}`], {
              // pass email to the next component for verification
              queryParams: { email: data[0].user.email },
              queryParamsHandling: 'preserve',
            });
          } else {
            // If an error occured, set the errMsg variable to activate the error msg in the browser
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
        },
      );
  }
}
