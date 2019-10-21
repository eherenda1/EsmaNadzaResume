import { Component, OnInit } from '@angular/core';
import { OneuserService } from 'src/app/oneuser.service';
import { ResumeService } from 'src/app/resume.service';
import { ActivatedRoute } from "@angular/router";
import { IUser } from 'src/app/user';
import { IResume } from 'src/app/resume';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  
})
export class HomeComponent implements OnInit {
  public users: IUser[];
  public user: IUser;
  public code: string;
  public resume: IResume;
  constructor(private _userService: OneuserService, private _resumeService: ResumeService, private route: ActivatedRoute) {

  }
  ngOnInit(){
    this.route.parent.params.subscribe((params:any) => {
      this.code = params.code;
    })
    this._userService.getUser(this.code).subscribe((r)=> {
      this.user = r;
    });
   this._resumeService.getResume(this.code).subscribe((data)=> this.resume = data);
  }
}
