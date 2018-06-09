import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomepageService } from './hompage/homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  profileStat: any = false;
  votes: any;
  constructor(private homeService: HomepageService) {}

  ngOnInit() {
    this.homeService.votes().subscribe(
      votes => {
        this.votes = votes;
      },
      err => {
        console.log(err);
      },
    );
  }

  hoverSetting() {}

  clickSetting() {}
  searchIt(value: string): string {
    return '';
  }

  profile() {}
  gotoProfile() {}
}
