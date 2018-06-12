import { MainRoutingModule } from './main/main-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AdminModule } from './admin/admin.module';
import { CoreModule } from './core/core.module';
import { AddVoteComponent } from './main/homepage/create-vote/add-vote/add-vote.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AdminModule,
    MainRoutingModule,
    CoreModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
