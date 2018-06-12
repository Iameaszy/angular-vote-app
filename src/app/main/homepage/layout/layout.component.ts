import { Component, OnInit } from '@angular/core';
import { HomepageService } from './homepage.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  profileStat: any = false;
  constructor(private homeService: HomepageService) {}

  ngOnInit() {}

  hoverSetting() {}

  clickSetting() {}
  searchIt(value: string): string {
    return '';
  }

  profile() {}
  gotoProfile() {}
}
