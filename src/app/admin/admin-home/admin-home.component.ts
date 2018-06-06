import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent implements OnInit {
  user: any;
  adminName = '';
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const user = JSON.parse(
      sessionStorage.getItem('pollway') || localStorage.getItem('pollway'),
    );
    this.http
      .get(`http://localhost:3000/admin/profile/${user.payload.email}`)
      .subscribe(data => console.log(data));
    this.route.paramMap.subscribe(data => {
      this.adminName = data.get('user');
    });
  }
}
