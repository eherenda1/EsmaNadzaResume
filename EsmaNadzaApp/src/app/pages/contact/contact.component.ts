import { Component, OnInit } from '@angular/core';
import {ContactService} from 'src/app/contact.service';
import { OneuserService } from 'src/app/oneuser.service';
import { ActivatedRoute } from "@angular/router";
import { IContact } from 'src/app/contact';
import { IUser } from 'src/app/user';
import { TranslateService } from 'src/app/translate.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'contact-page',
  templateUrl: './contact.component.html',
  
  
  
})
export class ContactComponent implements OnInit {
  public code: string;
  public contact: IContact;
  public user: IUser;
  public maintitle: string;
  public lang: string;
  public data: any;
  public holderName: any;
  public holderEmail: any;
  public holderSubject: any;
  public holderMessage: any;
  public contactHello: any;
  public contactText: any;
  public contactInformation: any;
  constructor( private _userService: OneuserService, private _contactService: ContactService, private route: ActivatedRoute,private translate: TranslateService) {

  }

  ngOnInit(){
    this.route.parent.params.subscribe((params:any) => {
      this.code = params.code;
      this.lang = params.lang;
    })

    this._userService.getUser(this.code).subscribe((r)=> {
      this.user = r;
      console.log("Ovdj sam", this.user)
    });
     
   
   this._contactService.getContact(this.code).subscribe((data)=> this.contact = data);
   this.translate.use(this.lang).then((r)=>{
    this.data = r;
    this.maintitle = this.data.CONTACTTITLE;
    this.holderName = this.data.HOLDERNAME;
    this.holderEmail = this.data.HOLDEREMAIL;
    this.holderSubject = this.data.HOLDERSUBJECT;
    this.holderMessage = this.data.HOLDERMESSAGE;  
    this.contactText = this.data.CONTACTTEXT; 
    this.contactHello = this.data.CONTACTHELLO;
    this.contactInformation = this.data.CONTACTINFORMATION;
});
   
  }
}