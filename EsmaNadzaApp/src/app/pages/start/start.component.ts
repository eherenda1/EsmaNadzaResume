import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'start-page',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  public users = [];
  constructor(private _usersService: UsersService) {

  }
  ngOnInit(){
     this._usersService.getUsers().subscribe(data => this.users = data);
  }
}
