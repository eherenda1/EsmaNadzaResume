 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OneuserService {

  constructor(private http: HttpClient) { }

  getUser(code: string): Observable<IUser>{
    return this.http.get<IUser>("/assets/jsonFiles/"+code+"json/user."+code+".json")
  }
}

