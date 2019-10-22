import { Component } from '@angular/core';
import { OneuserService } from 'src/app/oneuser.service';
import { ResumeService } from 'src/app/resume.service';
import { ActivatedRoute } from "@angular/router";
import { IUser } from 'src/app/user';
import { IResume } from 'src/app/resume';

@Component({
  selector: 'header-layout',
  templateUrl: './header.component.html',
 
})
export class HeaderComponent {
  public meni: any[];
  public users: IUser[];
  public user: IUser;
  public resume: IResume;
  public code: string;
  public selected:any;
  constructor(private _userService: OneuserService, private _resumeService: ResumeService, private route: ActivatedRoute) {
    this.meni = [
      {
        title:'Home',
        url: "home"
      },
      {
        title:'Resume',
        url: "resume" 
      },
      {
        title:'Projects',
        url: "projects"
      },
      {
        title:'Contact',
        url: "contact"
      }

    ]
  }



  ngOnInit(){
    console.log(this.meni);
    this.route.params.subscribe((params:any) => {
      this.code = params.code;
    })
     this._userService.getUser(this.code).subscribe((r)=> {
       this.user = r;
     });
     
     
  }

  select(item) {
    this.selected = item;
  }
}
