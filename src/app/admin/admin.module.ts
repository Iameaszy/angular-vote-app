import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminGuardService } from './admin-guard.service';
import { AdminAuthService } from './admin-auth.service';

const adminRoutes: Routes = [
  {
    path: 'admin/:user',
    canActivate: [AdminGuardService],
    children: [
      {
        path: '',
        component: AdminHomeComponent,
      },
    ],
  },
  {
    path: 'admin',
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
  providers: [AdminGuardService, AdminAuthService],
  declarations: [AdminLoginComponent, AdminMainComponent, AdminHomeComponent],
})
export class AdminModule {}
