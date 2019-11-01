import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResume } from './resume';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ResumeService {
  
  constructor(private http: HttpClient) { }

  getResume(code: string, lang:string): Observable<IResume>{
    
    console.log(lang)
    console.log("/assets/jsonFiles/"+code+"json/"+lang+"resume."+code+".json");
    return this.http.get<IResume>("/assets/jsonFiles/"+code+"json/"+lang+"resume."+code+".json")
  }
}
