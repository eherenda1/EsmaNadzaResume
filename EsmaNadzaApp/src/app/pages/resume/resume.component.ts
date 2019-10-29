import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/resume.service';
import { ReadmoreService } from 'src/app/readmore.service';
import { ActivatedRoute } from "@angular/router";
import { IResume, IHighSchool } from 'src/app/resume';

import  pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'resume-page',
  templateUrl: './resume.component.html',
 
})

export class ResumeComponent implements OnInit {
  public code: string;
  public resume: IResume;
  public highs: IHighSchool;

  constructor(private _resumeService: ResumeService, private readmore:ReadmoreService, private route: ActivatedRoute) {

  }
  
  ngOnInit(){
    this.route.parent.params.subscribe((params:any) => {
      this.code = params.code;
    })


   this._resumeService.getResume(this.code).subscribe((data)=> {
     this.resume = data;
     this.highs = this.resume.highSchool;
     
   });

   this._resumeService.getResume(this.code).subscribe((data) => {
    this.readmore.setItems(this.resume = data);
    console.log("ovdje ovdje", data);
  });

   
  // this._resumeService.getResume(this.code).subscribe((data)=> this.resume.work = data);

   
  }
  
  selected(item){
    this.readmore.set(item);
  }


  selecttitle(title){
    this.readmore.settitle(title);
    
  
  }

  getDocumentDefinition() {
    sessionStorage.setItem('resume', JSON.stringify(this.resume));
    return {
      content: 'This is a sample PDF'
    };
  }

  generatePdf(){
    const documentDefinition = { content: [
      {
        text: 'RESUME',
          bold: true,
          fontSize: 20,
          alignment: 'center',

      },
      
    ]
    };
    pdfMake.createPdf(documentDefinition).open();
   }
  

  
  
}
