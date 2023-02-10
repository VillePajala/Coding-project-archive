import { WeatherdataService } from './../weatherdata.service';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  hide : boolean = false;
  city : string = "Vantaa";
  weatherDataToTemplate : any[] = null;

  constructor(public fetchedWeatherData : WeatherdataService, 
              private dialogueCtrl : AlertController ) {  
  }

  
  chooseCity = async () : Promise<any> => {

    const alertWindow = await this.dialogueCtrl.create({
                                                    header: "Kohde",
                                                    message : "valitse kaupunki",
                                                    inputs : [  
                                                                {
                                                                  name : "city",
                                                                  type : "text",
                                                                  placeholder : "Kirjoita paikkakunta"
                                                                }
                                                              ],
                                                    buttons : [
                                                                {
                                                                  text : "Ok",
                                                                  handler : (data : any) => {
                                                                            this.fetchedWeatherData.fetchWeatherDataByCity(data.city);
                                                                            this.city = data.city;
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


