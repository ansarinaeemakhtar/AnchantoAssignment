import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  currentLanguage: string = '';
  internetConnection: boolean = true;
  constructor(private _data: DataService, private _router: Router) {
    this._data.currentLanguage.subscribe(result => this.currentLanguage = result)
    this._data.internetConnection.subscribe(result => this.internetConnection = result)

    !this.internetConnection && this._router.navigate(['/nointernet'])
  }
}
