import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StartComponent} from './Start Page/start.component';
import { LayoutComponent } from './Layout page/layout.component';
import { HomeComponent } from './Home page/home.component';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    HomeComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
