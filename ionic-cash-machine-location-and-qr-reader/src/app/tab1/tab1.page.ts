import { CashmachinesService } from './../cashmachines.service';
import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  errorMessage : string;
  latitude : number;
  longitude : number;
  streetAddress : string = "";
  postalCode : string = "";
  city : string = "";
  distanceInKilometers : number;


  constructor(private geolocation: Geolocation,
              private cashmachines : CashmachinesService) {}

  getLocation = () : void => {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.errorMessage = ""
      this.latitude = resp.coords.latitude;     // Samsung Galaxy S7 ei osannut hakea paikannustietoja joten kovakoodasin Tikkurilan koordinaatit
      this.longitude = resp.coords.longitude;   // tuonne .catchiin. Harmittaa, kun en saanut toimimaan ja voin vain toivoa, että virhe ei ole koodissa
      this.getNearestCashMachine();             // Luulen, että paikannus on kuitenkin kirjoitettu oikein, sillä selain osaa sillä hakea koordinaatit,
    }).catch((error) => {                       // joskin vähän vaihtelevalla menestyksellä. Viimeeksi se väitti minun olevan meressä Helsingin edustalla
      this.errorMessage = "";
      this.latitude = 60.294411;    
      this.longitude = 25.040070; 
      this.getNearestCashMachine();   
    });
  }


  getNearestCashMachine = () : any  => {
    let i : number;
    let minimumDistance : number = 999999;
    let indexOfClosestCashMachine : number;

    for (i = 0; i < this.cashmachines.cashMachineLocations.length; i++) {
      let locationDifference : number = this.equirectangularProjection(this.latitude, this.longitude, this.cashmachines.cashMachineLocations[i].koordinaattiLat, this.cashmachines.cashMachineLocations[i].koordinaattiLon);
      if (locationDifference < minimumDistance) {
        indexOfClosestCashMachine = i;
        minimumDistance = locationDifference;
      }
    }
    this.streetAddress = this.cashmachines.cashMachineLocations[indexOfClosestCashMachine].kohteenOsoite;
    this.postalCode = this.cashmachines.cashMachineLocations[indexOfClosestCashMachine].postinumero;
    this.city = this.cashmachines.cashMachineLocations[indexOfClosestCashMachine].postitoimipaikka;
  }


  equirectangularProjection = (startingLatitude, StartingLongitude, destinationLatitude, destinationLongitude) : any => {
    startingLatitude = this.DegreesToRadius(startingLatitude);
    destinationLatitude = this.DegreesToRadius(destinationLatitude);
    StartingLongitude = this.DegreesToRadius(StartingLongitude);
    destinationLongitude = this.DegreesToRadius(destinationLongitude);
    var R = 6371; // Kilometrit
    var x = (destinationLongitude - StartingLongitude) * Math.cos((startingLatitude + destinationLatitude) / 2);
    var y = (destinationLatitude - startingLatitude);
    var d = Math.sqrt(x * x + y * y) * R;
    this.distanceInKilometers = d / 1000;
    return d;
  }

  DegreesToRadius = (degree) : any => {
    return degree * Math.PI / 180;
  }

}



