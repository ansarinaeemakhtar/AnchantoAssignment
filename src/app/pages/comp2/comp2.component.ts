import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component {
  currentLanguage: string = '';
  constructor(private _data: DataService) {
    this._data.currentLanguage.subscribe(result => this.currentLanguage = result)
  }
}
