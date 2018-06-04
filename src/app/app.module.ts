import { MainRoutingModule } from './main/main-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AdminModule } from './admin/admin.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AdminModule,
    MainRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
