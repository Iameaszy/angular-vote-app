import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

interface CreateVote {
  data: { title: String; description: String; type: 'text' | 'image' };
}
@Injectable()
export class VoteService {
  constructor(private http: HttpClient, private router: Router) {}

  submit() {
    this.router.navigate(['/votes/add']);
  }

  getData(value: string, key?) {
    let data;
    if (key) {
      data = JSON.parse(localStorage.getItem(key)) || {};
    } else {
      data = JSON.parse(localStorage.getItem('pollwayData')) || {};
    }
    if (data[value]) {
      return data[value];
    }

    return false;
  }

  setData(key, values) {
    const data = JSON.parse(localStorage.getItem('pollwayData')) || {};
    console.log('data:', data);
    data[key] = values;
    localStorage.setItem('pollwayData', JSON.stringify(data));
    return true;
  }

  deleteData(datas: { [index: string]: string }) {
    const data = JSON.parse(localStorage.getItem('pollwayData')) || {};
    for (let i in datas) {
      if (data[i]) {
        delete data[i];
      } else {
        return false;
      }
    }
    localStorage.setItem('pollwayData', JSON.stringify(data));
    return true;
  }
}
