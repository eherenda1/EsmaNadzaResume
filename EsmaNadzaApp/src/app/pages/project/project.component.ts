import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/projects.service';
import { ActivatedRoute } from "@angular/router";
import { ReadmoreService } from 'src/app/readmore.service';

@Component({
  selector: 'project-page',
  templateUrl: './project.component.html',

})
export class ProjectComponent {
  public code: string;
  public projects = [];
  public project;
  constructor(private _projectsService: ProjectsService, private route: ActivatedRoute, private readmore: ReadmoreService) {

  }

  ngOnInit() {

    this.route.parent.params.subscribe((params: any) => {
      this.code = params.code;

    })

    this._projectsService.getProjects(this.code).subscribe((data) => {
      this.readmore.setItems(this.projects = data);
    });

  }

  selected(item) {
    this.readmore.set(item);


  }
}