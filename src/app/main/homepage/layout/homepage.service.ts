import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable()
export class HomepageService {
  constructor(private http: HttpClient) {}

  hoverSetting() {}

  clickSetting() {}
  searchIt(value: string): string {
    return '';
  }

  profile() {}
  gotoProfile() {}

  votes() {
    return this.http.get('http://localhost:3000').pipe(map((val, i) => val[0]));
  }
}
