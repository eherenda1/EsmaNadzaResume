import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/resume.service';
import { ReadmoreService } from 'src/app/readmore.service';
import { ActivatedRoute } from "@angular/router";
import { IResume } from 'src/app/resume';
import { TranslateService } from 'src/app/translate.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'resume-page',
  templateUrl: './resume.component.html',
 
})

export class ResumeComponent implements OnInit {
  public code: string;
  public resume: IResume;
  public maintitle: string;
  public lang: string;
  public data: any;
  public buttonLabel: any;
  public readmoreTitle: any;
  constructor(private _resumeService: ResumeService, private readmore:ReadmoreService, private route: ActivatedRoute,private translate: TranslateService) {

  }
  
 
  

  ngOnInit(){
    this.route.parent.params.subscribe((params:any) => {
      this.code = params.code;
      this.lang = params.lang;
    })


   this._resumeService.getResume(this.code,this.lang).subscribe((data)=> {
     this.resume = data;
   });
   
   this.translate.use(this.lang).then((r)=>{
    this.data = r;
    console.log(this.data);
    this.maintitle = this.data.RESUMETITLE;
    this.resume[0].title = this.data.EDUCATION;
    this.resume[1].title = this.data.WORK;
    this.resume[2].title = this.data.SKILLS;
    this.resume[3].title = this.data.LANGUAGES;
    this.resume[4].title = this.data.HOBBIES; 
    this.buttonLabel = this.data.BUTTONexport;
    this.readmoreTitle = this.data.READMORE;
   
    

});
   
  }
  
  selected(item){
    this.readmore.set(item);
  }


  selecttitle(title){
    this.readmore.settitle(title);
  
  }

  
  
}
