import { Component } from '@angular/core';
import { OneuserService } from 'src/app/oneuser.service';
import { ResumeService } from 'src/app/resume.service';
import { ActivatedRoute } from "@angular/router";
import { IUser } from 'src/app/user';
import { IResume } from 'src/app/resume';
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
  public data : IEn;
  public nesto: any;
  constructor(private _userService: OneuserService, private _resumeService: ResumeService, private route: ActivatedRoute,private translate: TranslateService) {
    
  
    
  }



  ngOnInit(){
    this.route.params.subscribe((params:any) => {
      this.code = params.code;
      this.lang = params.lang;
      
    })
     this._userService.getUser(this.code).subscribe((r)=> {
       this.user = r;
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
 
}
