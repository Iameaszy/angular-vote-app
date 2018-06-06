import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRoute,
  NavigationExtras,
} from '@angular/router';
import { AdminAuthService } from './admin-auth.service';

@Injectable()
export class AdminGuardService implements CanActivate {
  constructor(private auth: AdminAuthService, private router: Router) {}

  canActivate() {
    if (this.auth.checkLogin()) {
      return true;
    } else {
      this.router.navigate(['/admin']);
      return false;
    }
  }
}
