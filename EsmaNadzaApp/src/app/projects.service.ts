import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProject } from './project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }
  getProjects(code: string): Observable<IProject[]>{
    return this.http.get<IProject[]>("/assets/jsonFiles/"+code+"json/projects."+code+".json")
  }
}
