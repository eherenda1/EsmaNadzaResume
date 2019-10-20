import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { ResumeService } from 'src/app/resume.service';
import { ActivatedRoute } from "@angular/router";
import { IUser } from 'src/app/user';
import { IResume } from 'src/app/resume';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public users: IUser[];
  public user: IUser;
  public code: string;
  public resume: IResume;
  constructor(private _usersService: UsersService, private _resumeService: ResumeService, private route: ActivatedRoute) {

  }
  ngOnInit(){
    this.route.parent.params.subscribe((params:any) => {
      this.code = params.code;
    })
    this._usersService.getUsers().subscribe((r)=> {
      this.users = r;
      this.users.forEach(element => {
        if(element.code == this.code){
          this.user = element;
        }
      });
    });
   this._resumeService.getResume(this.code).subscribe((data)=> this.resume = data);
  }
}
