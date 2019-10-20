import { Component } from '@angular/core';
import { UsersService } from 'src/app/users.service';
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
  constructor(private _usersService: UsersService, private _resumeService: ResumeService, private route: ActivatedRoute) {}


  ngOnInit(){

    this.route.params.subscribe((params:any) => {
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
