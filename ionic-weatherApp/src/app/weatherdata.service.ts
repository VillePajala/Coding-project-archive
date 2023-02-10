import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class WeatherdataService {

  fetchedWeatherData : any = {              
                            cod : "200"
                            };
  
  fetchedWeatherForecast : any = {          
                            cod : "200"
                            };

  lastWeatherSearch : any;
  lastWeatherForecast : any;

  city : string = "vantaa"; 
  lastCity : string = "";   
  apiurl : string = "https://so3server.herokuapp.com/saatilanne/"
  apiUrlForForecast : string = "https://so3server.herokuapp.com/saaennuste/"
  error : string = "";


  constructor(private http : HttpClient) {  
    this.fetchWeatherDataByCity(this.city);
  }


  fetchWeatherDataByCity = (chosenCity) : void => {
    this.city = chosenCity.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    this.http.get(this.apiurl + this.city).subscribe((data : any[]) => {
      this.fetchedWeatherData = data;

      if (this.fetchedWeatherData.cod != "200") {
        this.error = "Paikkakuntaa ei löydy. Syötä uusi paikkakunta"
      } else {
        this.lastCity = this.city;
        this.lastWeatherSearch = this.fetchedWeatherData;
        this.error = "";
      }
      this.getWeatherForecast(this.city);
    });
  }

  getWeatherForecast = (chosenCity) : void => {
    this.http.get(this.apiUrlForForecast + chosenCity).subscribe((data : any[]) => {
      this.fetchedWeatherForecast = data;

      if (this.fetchedWeatherForecast.cod != "200") {
        this.error = "Paikkakuntaa ei löydy. Syötä uusi paikkakunta"
      } else {
        this.lastCity = this.city;
        this.lastWeatherForecast = this.fetchedWeatherForecast;

        let index = 0;
        this.lastWeatherForecast.list.forEach(day => {

          let dayNames = [
            'Sunnuntai',
            'Maanantai',
            'Tiistai',
            'Keskiviikko',
            'Torstai',
            'Perjantai',
            'Lauantai'
          ];
          let monthNames = [
            'Tammikuuta',
            'Helmikuuta',
            'Maaliskuuta',
            'Huhtikuuta',
            'Toukokuuta',
            'Kesäkuuta',
            'Heinäkuuta',
            'Elokuuta',
            'Syyskuuta',
            'Lokakuuta',
            'Marraskuuta',
            'Joulukuuta'
          ];

          let currentDate = new Date(day.dt_txt);
          let dayNumber = String(currentDate.getDate());
          dayNumber = dayNumber.replace(/^0+/, '')

          this.lastWeatherForecast.list[index].dayNumber = dayNumber;   
          this.lastWeatherForecast.list[index].weekday = dayNames[currentDate.getDay()];
          this.lastWeatherForecast.list[index].month = monthNames[currentDate.getMonth()];
             
          index = index + 1;
        });

        this.error = "";
      }
    });
  }


  ngOnInit(): void {
    
  }

}


