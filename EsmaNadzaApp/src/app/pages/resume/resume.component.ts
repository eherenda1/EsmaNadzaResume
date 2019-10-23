import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/resume.service';
import { ActivatedRoute } from "@angular/router";
import { IResume, IWork, IHobbiesInterests } from 'src/app/resume';


@Component({
  selector: 'resume-page',
  templateUrl: './resume.component.html',
 
})
export class ResumeComponent implements OnInit {
  public code: string;
  public resume: IResume;
  public workE: IWork[];
  public hobbiesInterestsE: IHobbiesInterests[];
  public readMore: boolean;

  constructor(private _resumeService: ResumeService, private route: ActivatedRoute) {

  }
  
  wants2readMore(){
    this.readMore = !this.readMore;
  }
  ngOnInit(){
    this.route.parent.params.subscribe((params:any) => {
      this.code = params.code;
    })
   this._resumeService.getResume(this.code).subscribe((data)=> {
     this.resume = data;
     this.workE = this.resume.work;
     this.hobbiesInterestsE = this.resume.hobbiesInterests;
   });
   
   
  // this._resumeService.getResume(this.code).subscribe((data)=> this.resume.work = data);

   
  }
}
