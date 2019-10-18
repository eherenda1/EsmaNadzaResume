import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/resume.service';

@Component({
  selector: 'resume-page',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  public resume;
  constructor(private _resumeService: ResumeService) {

  }
  ngOnInit(){
     this._resumeService.getResume().subscribe((r)=> this.resume = r);
  }
}