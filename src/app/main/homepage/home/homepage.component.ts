import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../layout/homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
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
}
