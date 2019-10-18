import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResume } from './resume';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ResumeService {

  private urlResume = "/assets/jsonFiles/nadzajson/resumenadza.json";
  constructor(private http: HttpClient) { }

  getResume(): Observable<IResume>{
    return this.http.get<IResume>(this.urlResume)
  }
}
