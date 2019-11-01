import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'

 
})
export class AppComponent {
  title = 'EsmaNadzaApp';
  selecttheme: boolean = true;
  theme;
  

  getlighttheme(){
    if( document.querySelector("#main"))
    console.log("Ovdje");
    

  }
}
