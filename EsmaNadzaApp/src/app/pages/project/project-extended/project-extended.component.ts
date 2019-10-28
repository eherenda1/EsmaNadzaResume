import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ReadmoreService } from 'src/app/readmore.service';
import { ActivatedRoute } from "@angular/router";
import { ProjectsService } from 'src/app/projects.service';
import { IProject } from 'src/app/project';


@Component({
  selector: 'app-project-extended',
  templateUrl: './project-extended.component.html',

})
export class ProjectExtendedComponent implements OnInit {

  public detail: IProject;
  public projects: IProject[];
  public code: string;
  public images: string[];
  public image: string;
  public increment: number = 0;
  public incrementI: number = 0;
  constructor(private readmore: ReadmoreService, private _projectsService: ProjectsService, private route: ActivatedRoute) { }



  ngOnInit() {
    console.log("ngOnInit");
    this.route.parent.params.subscribe((params: any) => {
      this.code = params.code;

    })
    this.readmore.getItems().subscribe(projects => {
      this.projects = projects;
      this.readmore.get().subscribe((project) => {
        this.detail = project;
        if(this.detail){
        this.images = this.detail.images;
        
      this.image=this.images[0];

        this.shift(this.projects.indexOf(this.detail));
        this.shiftImages(0);
        }
      });
    });


  }

  shift(increment) {
    if (!this.projects.length || increment >= this.projects.length || increment < 0) return;
    this.detail = this.projects[increment];
    this.images = this.detail.images;
    this.image = this.detail.images[0];
    this.incrementI=0;
    this.increment = increment;
  }

  left() {
    this.shift(this.increment - 1);
  }
  right() {
    this.shift(this.increment + 1);
  }
  shiftImages(incrementI) {
    if (!this.images.length || incrementI >= this.images.length || incrementI < 0) return;
    this.image= this.images[incrementI];
    
    this.incrementI = incrementI;
  }
  leftI() {
    this.shiftImages(this.incrementI - 1);
  }
  rightI() {
    this.shiftImages(this.incrementI + 1);
  }
}