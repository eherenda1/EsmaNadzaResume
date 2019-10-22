import { Component } from '@angular/core';
import { OneuserService } from 'src/app/oneuser.service';
import { ResumeService } from 'src/app/resume.service';
import { ActivatedRoute } from "@angular/router";
import { IUser } from 'src/app/user';
import { IResume } from 'src/app/resume';

@Component({
  selector: 'footer-layout',
  templateUrl: './footer.component.html',
  
})
export class FooterComponent {
  public users: IUser[];
  public user: IUser;
  public resume: IResume;
  public code: string;
  public selected:any;

  constructor(private _userService: OneuserService, private _resumeService: ResumeService, private route: ActivatedRoute){}

  ngOnInit(){
    
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