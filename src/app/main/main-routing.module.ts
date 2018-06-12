import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { MainGuardService } from './main-guard.service';
import { MainAuthService } from './main-auth.service';
import { LayoutComponent } from './homepage/layout/layout.component';
import { HomepageComponent } from './homepage/home/homepage.component';
import { HomepageService } from './homepage/layout/homepage.service';
import { VoteService } from './homepage/create-vote/vote.service';
import { CreateVoteComponent } from './homepage/create-vote/create-vote/create-vote.component';
import { AddVoteComponent } from './homepage/create-vote/add-vote/add-vote.component';

const routes: Routes = [
  {
    path: 'main',
    component: LandingPageComponent,
  },
  {
    path: '',
    canActivate: [MainGuardService],
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomepageComponent,
      },
      {
        path: 'votes/create',
        component: CreateVoteComponent,
      },
      {
        path: 'votes/add',
        component: AddVoteComponent,
      },
    ],
  },
  { path: 'main/login', component: LoginPageComponent },
  { path: 'main/register', component: SignupPageComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
  ],
  declarations: [
    LandingPageComponent,
    LoginPageComponent,
    SignupPageComponent,
    LayoutComponent,
    HomepageComponent,
    CreateVoteComponent,
    AddVoteComponent,
  ],
  providers: [MainGuardService, MainAuthService, HomepageService, VoteService],
  exports: [RouterModule],
})
export class MainRoutingModule {}
