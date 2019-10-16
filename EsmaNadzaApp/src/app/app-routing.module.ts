import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartComponent} from './Start page/start.component'


const routes: Routes = [
  {path: '', component:StartComponent},
 /*{path: 'glavna/:name', component:GlavnaComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
