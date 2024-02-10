import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentLanguage: string = '';
  internetConnection: boolean = true;

  constructor(public _translate: TranslateService, private _data: DataService, private _router: Router) {
    _translate.addLangs(['en', 'es', 'ar', 'ur'])
    _translate.setDefaultLang('en')
    this._data.currentLanguage.next('en');

    this._data.internetConnection.subscribe(result => this.internetConnection = result)

    !this.internetConnection && this._router.navigate(['/nointernet'])
  }

  switchLang(e: any) {
    let lang = e.target.value
    this._translate.use(lang)
    this._data.currentLanguage.next(lang);
    this._data.currentLanguage.subscribe(result => this.currentLanguage = result)
  }
}
