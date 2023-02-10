import { Component } from '@angular/core';
import { RatesService } from './rates.service'
import { Api } from './api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public exchangeRates$ : Api[] = [];

  constructor(private rates : RatesService) { }
  
}
