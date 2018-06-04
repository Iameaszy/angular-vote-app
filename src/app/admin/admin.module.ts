import { AdminMainAuthService } from './admin-main-auth.service';
import { AdminMainGuardService } from './admin-main-guard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ReactiveFormsModule } from '@angular/forms';

const adminRoutes: Routes = [
  {
    path: 'admin/profiles/:user',
    component: AdminMainComponent,
    canActivate: [AdminMainGuardService],
    children: [
      {
        path: '',
        component: AdminHomeComponent,
      },
    ],
  },
  {
    path: 'admin/login',
    component: AdminMainComponent,
    children: [
      {
        path: '',
        component: AdminLoginComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(adminRoutes),
  ],
  providers: [AdminMainGuardService, AdminMainAuthService],
  declarations: [AdminLoginComponent, AdminMainComponent, AdminHomeComponent],
})
export class AdminModule {}
