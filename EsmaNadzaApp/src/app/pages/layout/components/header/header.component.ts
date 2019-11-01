import { Component } from '@angular/core';
import { OneuserService } from 'src/app/oneuser.service';
import { ResumeService } from 'src/app/resume.service';
import { ActivatedRoute } from "@angular/router";
import { IUser } from 'src/app/user';
import { IResume } from 'src/app/resume';
import { ExportService} from 'src/app/export.service';
import { TranslateService } from 'src/app/translate.service';
import { IEn} from 'src/app/en';
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
  public lang:string;
  public selected:any;
  public exported: any;
  public data : IEn;
  public nesto: any;
  public element;
  constructor(private exports: ExportService, private _userService: OneuserService, private _resumeService: ResumeService, private route: ActivatedRoute,private translate: TranslateService) {
    
  
    
  }



  ngOnInit(){
    this.route.params.subscribe((params:any) => {
      this.code = params.code;
      this.lang = params.lang;
      
    })
     this._userService.getUser(this.code).subscribe((r)=> {
       this.user = r;
       this.exports.exportuser(this.exported = r);
     });

    
    this.translate.use(this.lang).then((r)=>{
      this.data = r;
      this.meni = [
        {
          title: this.data.HOME,
          url: "home",
          show:true
        },
        {
          title:this.data.RESUME,
          url: "resume",
          show:true
        },
        {
          title:this.data.PROJECTS,
          url: "projects",
          show:true
        },
        {
          title:this.data.CONTACT,
          url: "contact",
          show:true
        }
  
      ]
    
    });

   
   
    
     
  }

  select(item) {
    this.selected = item;
  }

  export(user){
    this.exported = user;
  }

  getlighttheme(){
    this.element= document.querySelector("#indexbody");

    console.log("Ime klase: ", this.element.className)

    this.element.removeAttribute('class'); 

    this.element.setAttribute('class', 'light');
    
   // this.element.classList.replace('default', 'esma');
    console.log("Ime klase: ", this.element.className)
    
  }

  getdarktheme(){
    this.element= document.querySelector("#indexbody");

    console.log("Ime klase: ", this.element.className)

    this.element.removeAttribute('class'); 

    this.element.setAttribute('class', 'dark');
    
   // this.element.classList.replace('default', 'esma');
    console.log("Ime klase: ", this.element.className)
    
  }

  getdefaulttheme(){
    this.element= document.querySelector("#indexbody");

    console.log("Ime klase: ", this.element.className)

    this.element.removeAttribute('class'); 

    this.element.setAttribute('class', 'default');
    
   // this.element.classList.replace('default', 'esma');
    console.log("Ime klase: ", this.element.className)
    
  }

 
}
