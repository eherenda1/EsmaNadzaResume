import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/resume.service';
import { ReadmoreService } from 'src/app/readmore.service';
import { ActivatedRoute } from "@angular/router";
import { IResume } from 'src/app/resume';


@Component({
  selector: 'resume-page',
  templateUrl: './resume.component.html',
 
})

export class ResumeComponent implements OnInit {
  public code: string;
  public resume: IResume;
  
 

  constructor(private _resumeService: ResumeService, private readmore:ReadmoreService, private route: ActivatedRoute) {

  }
  
 
  

  ngOnInit(){
    this.route.parent.params.subscribe((params:any) => {
      this.code = params.code;
    })


   this._resumeService.getResume(this.code).subscribe((data)=> {
     this.resume = data;
     
   });

   
  // this._resumeService.getResume(this.code).subscribe((data)=> this.resume.work = data);

   
  }
  
  selected(item){
    this.readmore.set(item);
  }


  selecttitle(title){
    this.readmore.settitle(title);
  
  }

  
  
}
