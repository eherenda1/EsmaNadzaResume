import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/resume.service';
import { ReadmoreService } from 'src/app/readmore.service';
import { ActivatedRoute, ChildrenOutletContexts } from "@angular/router";
import { IEn } from "src/app/en";
import {OneuserService} from 'src/app/oneuser.service';
import { TranslateService } from 'src/app/translate.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ProjectsService } from 'src/app/projects.service';
import { IResume } from 'src/app/resume';
import { IUser } from 'src/app/user';


import * as jspdf from 'jspdf'
import { ExportService } from 'src/app/export.service';

@Component({
  selector: "resume-page",
  templateUrl: "./resume.component.html",
})
export class ResumeComponent implements OnInit {

  public code: string;
  public resume: IResume;
  public maintitle: string;
  public lang: string;
  public data: IEn;
  public buttonLabel: any;
  public readmoreTitle: any;
  public niz = [];
  public names = [];
  public broj = 0;
  public always: false;
  public exportproject: any;
  public exporteduser: IUser;
  public exportedprojects = [];
  public index: number = 0;
  constructor(
    private _resumeService: ResumeService,
    private readmore: ReadmoreService,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private _exports: ExportService,
    private _projectsService: ProjectsService,
    private _users: OneuserService

  ) {}

  ngOnInit() {
    this.route.parent.params.subscribe((params: any) => {
      this.code = params.code;
      this.lang = params.lang;
      this._resumeService.getResume(this.code, this.lang).subscribe(data => {
        this.resume = data;
        console.log(this.resume);
      });
      this.translate.use(this.lang).then(r => {
        this.data = r;
        this.maintitle = "RESUMETITLE";
        this.buttonLabel = "BUTTONexport";
        this.readmoreTitle = "READMORE";
      });
      this._projectsService.getProjects(this.code, this.lang).subscribe((r)=> {
        this.exportedprojects = r;
      })
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
      this.buttonLabel = "BUTTONexport";
      this.readmoreTitle = "READMORE";
    });
      this._users.getUser(this.code, this.lang).subscribe((r)=> {
        this.exporteduser = r;
    
      });

      this._projectsService.getProjects(this.code, this.lang).subscribe((r)=> {
        this.exportedprojects = r;
      });
  }

  selected(item) {
      
      for(let i = 0; i<this.niz.length; i++){
        if(this.niz[i] == item) this.index = i;
      }
      this.readmore.set(item);
      this.readmore.setIndeks(this.index);
  }
  selecttitle(title) {
      this.readmore.settitle(title);
  }

  export2PDF() {
    var doc = new jspdf();
    var educationarray = this.resume[0].children;
    var workexperiencearray = this.resume[1].children;
    var skillsarray = this.resume[2].children;
    var hardskillsarray = skillsarray[0].skills;
    var softskillsarray = skillsarray[1].skills;
    var languagesarray = this.resume[3].children;
    var languages = languagesarray[0].skills;
    var hobbyarray = this.resume[4].children;
    var currentuser = this.exporteduser.firstname + ' ' + this.exporteduser.lastname;
    var width = doc.internal.pageSize.getWidth();
    var height = doc.internal.pageSize.getHeight();
    var heightnumber = 0;
    var img = new Image();
    var projectarray = this.exportedprojects;
    img.src = this.exporteduser.imgUrl;
    doc.setFillColor(20, 71, 97);
    doc.rect(0, 0, width, 43, "F");
    doc.setFontSize(48);
    doc.setTextColor(171, 192, 194);
    doc.text(85, 24, currentuser);
    //Box u kojem je slika
    doc.setFillColor(255, 255, 255);
    doc.rect(7.5, 7.5, 70, 70, "F");
    //Dodajemosliku
    doc.setFontSize(24);
    doc.text(94, 38, this.exporteduser.jobPosition);
    doc.addImage(img, 'jpg', 10, 10, 65, 65);
    //doc.text(94, 77.5, "bfs"); 77.5 zato što je box u kojem je slika visoka 70 i udaljena od margina 7.5 mm
    doc.setTextColor(54, 61, 61);
    //Contact information
    doc.setFontSize(12);
    var start=52;
    doc.text(width/2, start, this.exporteduser.address.street+ ' ' + this.exporteduser.address.hausNumber+', '+ this.exporteduser.place );
    doc.text(width/2, start+6, this.exporteduser.municipality +', '+ this.exporteduser.town );
    doc.text(width/2, start+12, this.exporteduser.email);
    doc.text(width/2, start+18, this.exporteduser.phoneNumber );
    heightnumber = heightnumber + 77.5;
    var holder = 0;
    for (var i = 0; i <= 4; i++) {
        holder = 0;
        doc.setFontSize(20);
        doc.setFillColor(171, 192, 194);
        doc.rect(0, heightnumber, width, 10, "F");
        heightnumber = heightnumber + 8;
        if (this.resume[i].title == "EDUCATION") {
          doc.text(8, heightnumber, this.data.EDUCATION);
          
            for (var j = 0; j <= educationarray.length - 1; j++) {
                doc.setFontSize(16);
                heightnumber = heightnumber + 12;
                doc.text(14, heightnumber, educationarray[j].name);
                if (j == holder) {
                    doc.setFontSize(12)
                    doc.text(16, heightnumber, educationarray[j].subject);
                    heightnumber = heightnumber + 8;
                    doc.text(16, heightnumber, educationarray[j].shortDescription);
                }
                holder++;
            }
            heightnumber = heightnumber + 8;
        }
        if (this.resume[i].title == "WORK EXPERIENCE") {
          doc.text(8, heightnumber, this.data.WORK);
            for (var j = 0; j <= workexperiencearray.length - 1; j++) {
              if (heightnumber>= 290){
                doc.addPage();
                heightnumber=7.5;                
              }
                doc.setFontSize(16);
                heightnumber = heightnumber + 12;
                doc.text(14, heightnumber, workexperiencearray[j].name);
                if (j == holder) {
                    doc.setFontSize(12)
                    heightnumber = heightnumber + 6;
                    doc.text(16, heightnumber, workexperiencearray[j].subject + '- ' + workexperiencearray[j].shortDescription);
                    heightnumber = heightnumber + 8;
                }
                holder++;
            }
        }
        if (this.resume[i].title == "SKILLS") {
          doc.text(8, heightnumber, this.data.SKILLS);
            var shifter = 0;
            var pamti = heightnumber;
            var hardheight = 0;
            var softheight = 0;
            for (var j = 0; j <= skillsarray.length - 1; j++) {
              if (heightnumber>= 290){
                doc.addPage();
                heightnumber=7.5;                
              }
                doc.setFontSize(16);
                heightnumber = pamti;
                heightnumber = heightnumber + 12;
                doc.text(14 + shifter, heightnumber, skillsarray[j].name);
                if (skillsarray[j].name == this.resume[i].children[0].name) {
                    for (var k = 0; k <= hardskillsarray.length - 1; k++) {
                      if (heightnumber>= 290){
                        doc.addPage();
                        heightnumber=7.5;   
                      }
                        doc.setFontSize(12);
                        heightnumber = heightnumber + 6;
                        doc.text(16 + shifter, heightnumber, '- ' + hardskillsarray[k]);
                        softheight = heightnumber;
                    }
                }
                shifter = width / 2 - 12;
                if (skillsarray[j].name == this.resume[i].children[1].name) {
                    for (var k = 0; k <= softskillsarray.length - 1; k++) {
                      if (heightnumber>= 290){
                        doc.addPage();
                        heightnumber=7.5;   
                      }
                        doc.setFontSize(12);
                        heightnumber = heightnumber + 6;
                        doc.text(16 + shifter, heightnumber, '- ' + softskillsarray[k]);
                        hardheight = heightnumber;
                    }
                }
            }
            if (hardheight > softheight) {
                heightnumber = hardheight + 8;
            } else heightnumber = softheight + 8;
        }
        if (this.resume[i].title == "LANGUAGES") {
          doc.text(8, heightnumber, this.data.LANGUAGES);
            for (var j = 0; j <= languagesarray.length - 1; j++) {
              if (heightnumber>= 290){
                doc.addPage();
                heightnumber=7.5;  
              }
              if (heightnumber>= 290){
                doc.addPage();
                heightnumber=7.5;                
              }
                doc.setFontSize(16);
                heightnumber = heightnumber + 6;

                for (var k = 0; k <= languages.length - 1; k++) {
                  if (heightnumber>= 290){
                    doc.addPage();
                    heightnumber=7.5;
                  }
                    doc.setFontSize(12);
                    heightnumber = heightnumber + 6;
                    doc.text(16, heightnumber, '- ' + languages[k]);
                }
              heightnumber = heightnumber + 8;
            }
        }
        if (heightnumber>= 290){
          doc.addPage();
          heightnumber=7.5;
          
        }
        if (this.resume[i].title == "HOBBIES") {
          doc.text(8, heightnumber, this.data.HOBBIES);
          heightnumber = heightnumber + 6;
          for (var j = 0; j <= hobbyarray.length - 1; j++) {
                  doc.setFontSize(12);
                  heightnumber = heightnumber + 6;
                  doc.text(16, heightnumber, '- ' + hobbyarray[j].name);
              }
              heightnumber = heightnumber + 8;
          }
    }
    
    doc.setFontSize(20);
    doc.setFillColor(171, 192, 194);
    doc.rect(0, heightnumber, width, 10, "F");
    heightnumber = heightnumber + 8;
    doc.text(8, heightnumber, this.data.PROJECTSTITLE);
    console.log(this.data.PROJECTSTITLE);
    console.log(projectarray.length);
    for(var i=0; i<= projectarray.length-1; i++){
      doc.setFontSize(16);
      console.log(projectarray[i].name);
      heightnumber = heightnumber + 8;
      doc.text(16, heightnumber,'- '+ projectarray[i].name);
      doc.setFontSize(12);
      heightnumber = heightnumber + 8;
      doc.text(20, heightnumber, projectarray[i].shortDescription);
    }
    doc.save("cv");
}

}