import { Component } from "@angular/core";
import { OneuserService } from "src/app/oneuser.service";
import { ResumeService } from "src/app/resume.service";
import { ActivatedRoute, Router } from "@angular/router";
import { IUser } from "src/app/user";
import { IResume } from "src/app/resume";
import { TranslateService } from "src/app/translate.service";
import { IEn } from "src/app/en";
@Component({
  selector: "header-layout",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  public meni: any[];
  public users: IUser[];
  public user: IUser;
  public resume: IResume;
  public code: string;
  public lang: string;
  public selected: any;
  public data: IEn;
  public nesto: any;
  public path: string;
  public page: any;
  public choose = "SELECTPL";
  public langopt: any[];
  constructor(
    private _userService: OneuserService,
    private _resumeService: ResumeService,
    private route: ActivatedRoute,
    private router: Router,
    private translate: TranslateService,
  ) {}

  ngOnInit() {
    this.langopt = [
      {
          option:"Bosnian",
          translate: "BS",
          value:"bs"
      },
      {
        option:"English",
        translate: "EN",
        value: "en"
    },
    {
      option:"German",
      translate: "DE",
      value:"de"
  }
    ]
    this.route.params.subscribe((params: any) => {
      this.code = params.code;
      this.lang = params.lang;
    });
    this._userService.getUser(this.code,this.lang).subscribe(r => {
      this.user = r;
    });
    this.translate.use(this.lang).then(r => {
      this.data = r;
      this.meni = [
        {
          title: "HOME",
          url: "home",
          show: true,
        },
        {
          title: "RESUME",
          url: "resume",
          show: true,
        },
        {
          title: "PROJECTS",
          url: "projects",
          show: true,
        },
        {
          title: "CONTACT",
          url: "contact",
          show: true,
        },
      ];
    });
  }

  select(item) {
    this.selected = item;
  }
  setLang(lang: string) {
    console.log("uslo");
    this.translate.use(lang);
    this.lang = lang;
    this.path = this.router.url;
    this.page = this.path.substring(11, this.path.length);
    this.router.navigateByUrl("/" + this.lang + "/layout/" + this.page);
  }
}
