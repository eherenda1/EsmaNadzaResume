import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IContact } from './contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getContact(code: string): Observable<IContact>{
    
  
    return this.http.get<IContact>("/assets/jsonFiles/"+code+"json/contact."+code+".json")
  }
}
