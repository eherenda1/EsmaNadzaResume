import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartComponent} from './pages/start/start.component'
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectComponent } from './pages/project/project.component';

import {HeaderComponent} from './pages/layout/components/header/header.component';
import {FooterComponent} from './pages/layout/components/footer/footer.component';


const routes: Routes = [
  {path: '', component:StartComponent},
  { path: 'layout', 
    component:LayoutComponent,
    children: [
      { path:'home/:code', component:HomeComponent},
      { path:'resume', component:ResumeComponent},
      { path:'projects', component:ProjectComponent},
      { path:'contact', component:ContactComponent},
    ]
  }

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
