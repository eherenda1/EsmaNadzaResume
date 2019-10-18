import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { StartComponent} from './pages/start/start.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectComponent } from './pages/project/project.component';


import {HeaderComponent} from './pages/layout/components/header/header.component';
import {FooterComponent} from './pages/layout/components/footer/footer.component';

import {UsersService} from './users.service';
import {HttpClientModule} from '@angular/common/http';
import {ResumeService} from './resume.service';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    HomeComponent,
    LayoutComponent,
    ResumeComponent,
    ContactComponent, 
    ProjectComponent,
    HeaderComponent,
    FooterComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    
  ],
  providers: [UsersService,
             ResumeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
