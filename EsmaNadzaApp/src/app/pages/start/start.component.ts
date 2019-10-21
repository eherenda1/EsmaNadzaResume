import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { IUser } from 'src/app/user';
@Component({
  selector: 'start-page',
  templateUrl: './start.component.html',
 
})
export class StartComponent implements OnInit {
  public users= [];
  constructor(private _usersService: UsersService) {

  }
  ngOnInit(){
     this._usersService.getUsers().subscribe((r)=> this.users = r);
  }
}
