import { AdminMainAuthService } from './admin-main-auth.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRoute,
  NavigationExtras
} from '@angular/router';

@Injectable()
export class AdminMainGuardService implements CanActivate {
  constructor(private auth: AdminMainAuthService, private router: Router) { }

  canActivate() {
    if (this.auth.allow) {
      return true;
    }
    return this.checkLogin();
  }

  checkLogin() {
    const pollway = JSON.parse(sessionStorage.getItem('pollway')) || JSON.parse(localStorage.getItem('pollway'));
    console.log('pollway:', pollway);
    console.log(this.auth.token);
    if (pollway) {
      return true;
    } else {
      this.router.navigate(['/admin/login']);
      return false;
    }
  }
}
