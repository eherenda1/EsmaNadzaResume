import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReadmoreService {
  private item;
  private items;
  private title;
 
  constructor() { }

  public get(): Observable<any>{ 
    return of(this.item);
  }

  set(item:any){ 
    this.item = item;
    console.log(this.item);
  }

  public getItems(): Observable<any>{ 
    return of(this.items);
  }

  setItems(items:any){ 
    this.items = items;
  }
  
  public gettitle(): Observable<string>{
    return of(this.title);
  }

  settitle(title: string){
    this.title=title;
  }
}
