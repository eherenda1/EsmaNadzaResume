import { Component, OnInit } from '@angular/core';
import {ContactService} from 'src/app/contact.service';
import { ActivatedRoute } from "@angular/router";
import { IContact } from 'src/app/contact';

@Component({
  selector: 'contact-page',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public code: string;
  public contact: IContact;
  constructor( private _contactService: ContactService, private route: ActivatedRoute) {

  }

  ngOnInit(){
    this.route.parent.params.subscribe((params:any) => {
      this.code = params.code;
      console.log(params);
    })
   
   
   this._contactService.getContact(this.code).subscribe((data)=> this.contact = data);
   
  }
}