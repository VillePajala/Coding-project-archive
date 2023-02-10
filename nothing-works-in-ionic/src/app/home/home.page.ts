import { LocationModalPage } from './../location-modal/location-modal.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { DatabaseService } from './../database.service';
import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tunniste : string;
  ohjeistus : string;
  latitude : number;
  longitude : number;
  imageError : string;
  image : string;
  imageArray : any = [];

  constructor (private database : DatabaseService,
               private geolocation: Geolocation,
               private dialogueCtrl : AlertController,
               private modalController : ModalController) {
  }


  nimeaSijainti = async () : Promise<any> => {
    const alertWindow = await this.dialogueCtrl.create({
                                                    header: "Sijainnin tiedot",
                                                    message : "Millä nimellä sijainti tallennetaan?",
                                                    inputs : [  
                                                                {
                                                                  name : "nimi",
                                                                  type : "text",
                                                                  placeholder : "Anna sjainnille nimi"
                                                                },
                                                                {
                                                                  name : "ohje",
                                                                  type : "text",
                                                                  placeholder : "Lisää muistiinpano"
                                                                }
                                                              ],
                                                    buttons : [
                                                                {
                                                                  text : "Tallenna",
                                                                  handler : (data : any) => {
                                                                            this.tunniste = data.nimi;
                                                                            this.ohjeistus = data.ohje;
                                                                            this.haeSijainti();
                                                                          }
                                                                },
                                                                {
                                                                  text : "Peruuta",
                                                                  role : "cancel",
                                                                  cssClass : "secondary"
                                                                }
                                                              ]
                                                      });
    await alertWindow.present();
  }
  

  haeSijainti = () : void => {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;     
      this.longitude = resp.coords.longitude;   
      this.tallennaSijainti();
    }).catch((error) => {                       
      this.latitude = 60.294411;    
      this.longitude = 25.040070; 
      this.tallennaSijainti();
    });
  }
  

  tallennaSijainti = () : void => {

    let timestamp = new Date().getTime();
    let date = new Date(timestamp);
    let paiva = date.getDate();
    let kuukausi = date.getMonth() + 1;
    let vuosi = date.getFullYear();
    let tunnit = date.getHours();
    let minuutit = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let paivamaara = paiva + "." + kuukausi + "." + vuosi;
    let kellonaika = tunnit + ":" + minuutit;
    let uusiSijainti : any = {
                                nimi : this.tunniste,
                                ohjeistus : this.ohjeistus,
                                lat : this.latitude,
                                lon : this.longitude,
                                pvm : paivamaara,
                                klo : kellonaika,
                                aikaleima : timestamp
                             }
                             
    this.database.uusi(uusiSijainti);

  }


  naytaTiedotModaalissa = async (sijainti : any) : Promise<any> => {

    const modal = await this.modalController.create({
                                                      component : LocationModalPage,
                                                      componentProps : { "sijainti" : sijainti }
                                                    });
    modal.present();
  }


  vahvistaPoisto = async (sijainninTunniste, kuvanTunniste) : Promise<any> => {
    let sijaintiId = sijainninTunniste;
    let kuvaId = kuvanTunniste;
    const alertWindow = await this.dialogueCtrl.create({
                                                    header: "Varoitus!",
                                                    message : "Haluatko varmasti poistaa sijainnin?",
                                                    inputs : [  
                                                              ],
                                                    buttons : [
                                                                {
                                                                  text : "Poista sijainti",
                                                                  handler : (data : any) => {
                                                                            this.database.poista(sijaintiId, kuvaId);
                                                                          }
                                                                },
                                                                {
                                                                  text : "Peruuta",
                                                                  role : "cancel",
                                                                  cssClass : "secondary"
                                                                }
                                                              ]
                                                      });
    await alertWindow.present();
  }

}


