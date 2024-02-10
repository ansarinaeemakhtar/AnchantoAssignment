import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nointernet',
  templateUrl: './nointernet.component.html',
  styleUrls: ['./nointernet.component.scss']
})
export class NointernetComponent {
  currentLanguage: string = '';
  constructor(private _data: DataService) {
    this._data.currentLanguage.subscribe(result => this.currentLanguage = result)
  }
}
