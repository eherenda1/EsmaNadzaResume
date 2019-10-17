import { Component } from '@angular/core';

@Component({
  selector: 'project-page',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  public project = [
    {"id": 1, "name": "Nadza", "age": 30},
  ]
  
}