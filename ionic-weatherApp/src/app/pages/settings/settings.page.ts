import { Component, OnInit } from '@angular/core';
import { WeatherdataService } from 'src/app/weatherdata.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  city : string = "";

  constructor(public fetchedWeatherData : WeatherdataService) { }

  ngOnInit() {
  }

}
