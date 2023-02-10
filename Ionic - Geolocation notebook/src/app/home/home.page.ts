import { Location } from './../location';
import { DatabaseService } from './../database.service';
import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  errorMessage : string;
  latitude : number = 0;
  longitude : number = 0;
  timestamp : number = 0;

  constructor(private geolocation : Geolocation,private database : DatabaseService) {}

  // Taaskin sama pulma, paikannusmetodi toimii ja hakee sijainnin, mutta sitä haettua sijaintia voi
  // käyttää vain selaimella. En oikein ymmärrä miten metodi antaa virheen kännykässä, mutta selain osaa sitä käyttää
  // Varsin kumma juttu
  getLocation = () : void => {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.errorMessage = ""
      let timestamp = new Date().getTime();
    
      let newLocation : any = { lat : timestamp, lon : timestamp, timestamp : timestamp};
      this.database.addNewLocation(newLocation)
      // this.database.latitude = resp.coords.latitude;    
      // this.database.longitude = resp.coords.longitude;        
          
    }).catch((error) => {
      this.errorMessage = "Nykyistä sijaintia ei voitu määrittää";
    });
  }


}
