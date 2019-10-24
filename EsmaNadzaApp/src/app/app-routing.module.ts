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
import {ResumeExtendedComponent} from './pages/resume/resume-extended/resume-extended.component';

const routes: Routes = [
  {path: '', component:StartComponent},
  { path: 'layout/:code', 
    component:LayoutComponent,
    children: [
      { path:'home', component:HomeComponent},
      { path:'resume', component:ResumeComponent,
      children: [
        { path: 'readmore', component:ResumeExtendedComponent},
      ]
    },
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
