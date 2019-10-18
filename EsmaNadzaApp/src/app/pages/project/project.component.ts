import { Component } from '@angular/core';
import { ProjectsService } from 'src/app/projects.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'project-page',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  public code: string;
  public projects = [];
  constructor(private _projectsService: ProjectsService, private route: ActivatedRoute) {
   
  }
  
    ngOnInit(){
    
      this.route.parent.params.subscribe((params:any) => {
        this.code = params.code;
        console.log(params);
      })
     
     
     this._projectsService.getProjects(this.code).subscribe((data)=> this.projects = data);
  }
}