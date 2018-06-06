import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRoute,
  NavigationExtras,
} from '@angular/router';
import { MainAuthService } from './main-auth.service';

@Injectable()
export class MainGuardService implements CanActivate {
  constructor(private auth: MainAuthService, private router: Router) {}

  canActivate() {
    if (this.auth.checkLogin()) {
      return true;
    } else {
      this.router.navigate(['/main/login']);
      return false;
    }
  }
}
