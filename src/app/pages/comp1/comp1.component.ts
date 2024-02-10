import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component {
  currentLanguage: string = '';
  constructor(private _data: DataService) {
    this._data.currentLanguage.subscribe(result => this.currentLanguage = result)
  }
}
