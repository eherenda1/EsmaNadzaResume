import { Component, OnInit } from '@angular/core';
import { ReadmoreService } from 'src/app/readmore.service';


@Component({
  selector: 'app-resume-extended',
  templateUrl: './resume-extended.component.html',
  styleUrls: ['./resume-extended.component.scss']
})
export class ResumeExtendedComponent implements OnInit {

  public detail:any = {};

  constructor(private readmore:ReadmoreService) { }
       

  ngOnInit() {
    this.readmore.get().subscribe(r=>{
      this.detail = r;
      console.log("Detail page", r)
    })
 
    /*this.route.parent.params.subscribe((params:any) => {
      this.code = params.code;
    })

    this._readmoreService.getItem(this.item).subscribe((data)=> {
      this.item = data;
      
    });

    
  }
*/
  

}
}