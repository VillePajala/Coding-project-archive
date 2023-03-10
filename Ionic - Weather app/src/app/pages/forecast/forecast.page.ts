import { WeatherdataService } from './../../weatherdata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.page.html',
  styleUrls: ['./forecast.page.scss'],
})
export class ForecastPage implements OnInit {

  weatherForecast : any[];

  constructor(public fetchedWeatherForecast : WeatherdataService) {
    this.weatherForecast = this.fetchedWeatherForecast.fetchedWeatherForecast;
   }

  ngOnInit() {
    this.weatherForecast = this.fetchedWeatherForecast.fetchedWeatherForecast;
  }

}
