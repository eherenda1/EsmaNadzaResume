import { Component, OnInit } from '@angular/core';
import { ExportService } from 'src/app/export.service';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent implements OnInit {
  public user: any;

  constructor(private exports: ExportService, private route: ActivatedRoute) { }

  ngOnInit() {



  }

}
