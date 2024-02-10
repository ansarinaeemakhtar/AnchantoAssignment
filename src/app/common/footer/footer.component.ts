import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentLanguage: string = '';
  constructor(private _data: DataService) {
    this._data.currentLanguage.subscribe(result => this.currentLanguage = result)
  }
}
