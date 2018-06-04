import { AdminMainAuthService } from './admin-main-auth.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRoute,
  NavigationExtras,
} from '@angular/router';

@Injectable()
export class AdminMainGuardService implements CanActivate {
  constructor(private auth: AdminMainAuthService, private router: Router) {}

  canActivate() {
    return this.checkLogin();
  }

  checkLogin() {
    // retrieve our data from storage
    const pollway =
      JSON.parse(sessionStorage.getItem('pollway')) ||
      JSON.parse(localStorage.getItem('pollway'));
    // if data is present, allow navigation else reject
    if (pollway) {
      return true;
    } else {
      this.router.navigate(['/admin/login']);
      return false;
    }
  }
}
