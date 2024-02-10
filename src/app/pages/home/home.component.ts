import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currentLanguage: string = '';
  internetConnection: boolean = true;
  constructor(private _data: DataService, private _router: Router) {
    this._data.currentLanguage.subscribe(result => this.currentLanguage = result)
    this._data.internetConnection.subscribe(result => this.internetConnection = result)
  }

  ngOnInit() {
    !this.internetConnection && this._router.navigate(['/nointernet'])
    console.log(this.internetConnection)
  }
}
