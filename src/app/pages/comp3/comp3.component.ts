import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component {
  currentLanguage: string = '';
  constructor(private _data: DataService) {
    this._data.currentLanguage.subscribe(result => this.currentLanguage = result)
  }
}
