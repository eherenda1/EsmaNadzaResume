import { Component } from '@angular/core';
import { OneuserService } from 'src/app/oneuser.service';
import { ResumeService } from 'src/app/resume.service';
import { ActivatedRoute,Router } from "@angular/router";
import { IUser } from 'src/app/user';
import { IResume } from 'src/app/resume';
import { TranslateService } from 'src/app/translate.service';
import { IEn} from 'src/app/en';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

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
  public lang: string;
  public data: any;
  public contactLabel: string;
  public callLabel: string;
  public buttonValue: string;

  constructor(private _userService: OneuserService, private _resumeService: ResumeService, private route: ActivatedRoute,private router: Router,private translate: TranslateService){}

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
      this.contactLabel = this.data.CONTACTfooter;
      this.callLabel = this.data.CALL;
      this.buttonValue = this.data.BUTTONfooter;
  
  });
     
  }
 
  select(item) {
    this.selected = item;
  }
  setLang(lang: string) {
    this.translate.use(lang);
    this.lang = lang;
    this.router.navigateByUrl('/'+this.lang+'/layout/esma/resume');
    
    console.log(this.lang);
  }
}