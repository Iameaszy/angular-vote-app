import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class GuardService implements CanActivate {

  constructor() { }
  canActivate() {
    return this.checkLogin();
  }

  checkLogin(): boolean {
    return true;
  }

}
