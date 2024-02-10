import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'anchanto-2';
  internetConnection: boolean = true;
  constructor(private _router: Router, private _data: DataService) { !navigator.onLine && this._data.internetConnection.next(false) }
}
