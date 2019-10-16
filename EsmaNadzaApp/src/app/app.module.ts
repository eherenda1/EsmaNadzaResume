import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './Start Page/start.component';
import { ResumeComponent } from './Resume Page/resume.component';
import { ContactComponent } from './Contact Page/contact.component';
import { ProjectComponent } from './Project Page/project.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ResumeComponent,
    ContactComponent, 
    ProjectComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
