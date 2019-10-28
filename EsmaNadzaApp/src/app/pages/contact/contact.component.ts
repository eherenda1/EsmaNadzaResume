import { Component, OnInit } from '@angular/core';
import {ContactService} from 'src/app/contact.service';
import { OneuserService } from 'src/app/oneuser.service';
import { ActivatedRoute } from "@angular/router";
import { IContact } from 'src/app/contact';
import { IUser } from 'src/app/user';

@Component({
  selector: 'contact-page',
  templateUrl: './contact.component.html',
  
  
  
})
export class ContactComponent implements OnInit {
  public code: string;
  public contact: IContact;
  public user: IUser;
  constructor( private _userService: OneuserService, private _contactService: ContactService, private route: ActivatedRoute) {

  }

  ngOnInit(){
    this.route.parent.params.subscribe((params:any) => {
      this.code = params.code;
   
    })

    this._userService.getUser(this.code).subscribe((r)=> {
      this.user = r;
    });
   
   
   this._contactService.getContact(this.code).subscribe((data)=> this.contact = data);
   
  }
}