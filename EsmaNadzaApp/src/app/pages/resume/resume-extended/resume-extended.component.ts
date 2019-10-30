import { Component, OnInit } from '@angular/core';
import { ReadmoreService } from 'src/app/readmore.service';
import {ResumeService } from 'src/app/resume.service';
import { IResume } from 'src/app/resume';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-resume-extended',
  templateUrl: './resume-extended.component.html'
})
export class ResumeExtendedComponent implements OnInit {

  public detail:any = {};
  public resumeextended: IResume[];
  public caption: string;
  public increment: number = 0;

  constructor(private readmore:ReadmoreService , private _resumeService: ResumeService, private route: ActivatedRoute) { }
       

  ngOnInit() {
    this.readmore.get().subscribe(data=>{
      this.detail = data;
      console.log("Detail page", data)
    })
    
    this.readmore.gettitle().subscribe(data=>{
      this.caption = data;
      console.log("naslov", this.caption);
    })

    this.readmore.getItems().subscribe(resumeextended => {
      this.resumeextended = resumeextended;
      console.log(this.resumeextended);
      this.readmore.get().subscribe((resumeextended) => {
        this.detail = resumeextended;
       
        if(this.detail){
        console.log(this.resumeextended.indexOf(this.detail));
        this.shift(this.resumeextended.indexOf(this.detail));
      
        }
      });
    });

  

}


shift(increment) {
  if (!this.resumeextended.length || increment >= this.resumeextended.length || increment < 0) return;
  this.detail = this.resumeextended[increment];

  console.log("Detail", this.detail);
  console.log("Drugi dio", this.resumeextended[increment])
  
  this.increment = increment;


}

left() {
  this.shift(this.increment - 1);
}
right() {
  this.shift(this.increment + 1);
}

}