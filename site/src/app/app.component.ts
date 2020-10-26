import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'site';
  public url: string = "";

  constructor(private router: Router, 
      private translate: TranslateService) {
    translate.setDefaultLang('en');
    router.events.subscribe((val) => {
      this.url = this.router.url;
    });
  }

  ngOnInit() {
    AOS.init();
  }
}
