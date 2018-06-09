import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomepageComponent } from './homepage/homepage.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { MainGuardService } from './main-guard.service';
import { MainAuthService } from './main-auth.service';
import { HomepageService } from './homepage/hompage/homepage.service';

const routes: Routes = [
  {
    path: 'main',
    component: LandingPageComponent,
  },
  {
    path: '',
    canActivate: [MainGuardService],
    children: [
      {
        path: '',
        component: HomepageComponent,
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
    HttpClientModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
  ],
  declarations: [
    LandingPageComponent,
    LoginPageComponent,
    SignupPageComponent,
    HomepageComponent,
  ],
  providers: [MainGuardService, MainAuthService, HomepageService],
  exports: [RouterModule],
})
export class MainRoutingModule {}
