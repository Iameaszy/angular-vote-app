import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class MainAuthService {
  constructor(private router: Router) {}
  bool = false;
  checkLogin() {
    // retrieve our data from storage
    const pollway =
      JSON.parse(sessionStorage.getItem('pollway')) ||
      JSON.parse(localStorage.getItem('pollway'));
    // if data is present, allow navigation else reject
    if (pollway) {
      sessionStorage.setItem('pollway', JSON.stringify(pollway));
      return pollway;
    } else {
      return false;
    }
  }
}
