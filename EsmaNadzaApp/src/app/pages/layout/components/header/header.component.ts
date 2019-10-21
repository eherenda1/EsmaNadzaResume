import { Component } from '@angular/core';
import { OneuserService } from 'src/app/oneuser.service';
import { ResumeService } from 'src/app/resume.service';
import { ActivatedRoute } from "@angular/router";
import { IUser } from 'src/app/user';
import { IResume } from 'src/app/resume';

@Component({
  selector: 'header-layout',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public users: IUser[];
  public user: IUser;
  public resume: IResume;
  public code: string;
  constructor(private _userService: OneuserService, private _resumeService: ResumeService, private route: ActivatedRoute) {}


  ngOnInit(){

    this.route.params.subscribe((params:any) => {
      this.code = params.code;
    })
     this._userService.getUser(this.code).subscribe((r)=> {
       this.user = r;
     });
     
     
  }
}
