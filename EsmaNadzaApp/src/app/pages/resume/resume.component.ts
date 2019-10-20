import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/resume.service';
import { ActivatedRoute } from "@angular/router";
import { IResume } from 'src/app/resume';


@Component({
  selector: 'resume-page',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  public code: string;
  public resume: IResume;
  constructor(private _resumeService: ResumeService, private route: ActivatedRoute) {

  }
  ngOnInit(){
    this.route.parent.params.subscribe((params:any) => {
      this.code = params.code;
    })
   this._resumeService.getResume(this.code).subscribe((data)=> this.resume = data);
  }
}