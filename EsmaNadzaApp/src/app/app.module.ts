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
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
