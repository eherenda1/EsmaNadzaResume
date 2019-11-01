import { Component, OnInit } from "@angular/core";
import { ResumeService } from "src/app/resume.service";
import { ReadmoreService } from "src/app/readmore.service";
import { ActivatedRoute } from "@angular/router";

import { TranslateService } from "src/app/translate.service";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { IResume, IHighSchool } from "src/app/resume";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: "resume-page",
  templateUrl: "./resume.component.html",
})
export class ResumeComponent implements OnInit {
  public code: string;
  public resume: IResume;
  public maintitle: string;
  public lang: string;
  public data: any;
  public buttonLabel: any;
  public readmoreTitle: any;
  public niz = [];
  public names = [];
  public broj = 0;
  constructor(
    private _resumeService: ResumeService,
    private readmore: ReadmoreService,
    private route: ActivatedRoute,
    private translate: TranslateService,
  ) {}

  ngOnInit() {
    this.route.parent.params.subscribe((params: any) => {
      this.code = params.code;
      this.lang = params.lang;
      this._resumeService.getResume(this.code, this.lang).subscribe(data => {
        this.resume = data;
      });
    });

    this._resumeService.getResume(this.code, this.lang).subscribe(data => {
      this.resume = data;
      Object.keys(this.resume).forEach(key => {
        for (let i = 0; i < this.resume[key].children.length; i++) {
          this.names[this.broj] = this.resume[key].title;
          this.niz[this.broj] = this.resume[key].children[i];
          this.broj++;
        }
      });

      this.readmore.setTitles(this.names);
      this._resumeService.setArray(this.names);
      this.readmore.setItems(this.niz);
    });

    this.translate.use(this.lang).then(r => {
      this.data = r;
      this.maintitle = "RESUMETITLE";
      this.resume[0].title = "EDUCATION";
      this.resume[1].title = "WORK";
      this.resume[2].title = "SKILLS";
      this.resume[3].title = "LANGUAGES";
      this.resume[4].title = "HOBBIES";
      this.buttonLabel = "BUTTONexport";
      this.readmoreTitle = "READMORE";
    });
  }

  selected(item) {
    this.readmore.set(item);
  }

  selecttitle(title) {
    this.readmore.settitle(title);
  }

  getDocumentDefinition() {
    sessionStorage.setItem("resume", JSON.stringify(this.resume));
    return {
      content: "This is a sample PDF",
    };
  }

  generatePdf() {
    const documentDefinition = {
      content: [
        {
          text: "RESUME",
          bold: true,
          fontSize: 20,
          alignment: "center",
        },
      ],
    };
    pdfMake.createPdf(documentDefinition).open();
  }
}
