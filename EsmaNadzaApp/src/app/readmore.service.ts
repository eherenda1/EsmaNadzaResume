import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReadmoreService {
  private item;
  constructor() { }

  public get(): Observable<any>{  
    return of(this.item);
  }

  set(item:any){ this.item = item;}
}
