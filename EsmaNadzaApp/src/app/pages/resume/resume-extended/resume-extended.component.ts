import { Component, OnInit } from '@angular/core';
import { ReadmoreService } from 'src/app/readmore.service';


@Component({
  selector: 'app-resume-extended',
  templateUrl: './resume-extended.component.html'
})
export class ResumeExtendedComponent implements OnInit {

  public detail:any = {};
  public caption: string;

  constructor(private readmore:ReadmoreService) { }
       

  ngOnInit() {
    this.readmore.get().subscribe(data=>{
      this.detail = data;
      console.log("Detail page", data)
    })
    
    this.readmore.gettitle().subscribe(data=>{
      this.caption = data;
      console.log("naslov", this.caption);
    })
  

}
}