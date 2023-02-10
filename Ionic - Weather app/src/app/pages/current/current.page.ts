import { AlertController } from '@ionic/angular';
import { WeatherdataService } from './../../weatherdata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current',
  templateUrl: './current.page.html',
  styleUrls: ['./current.page.scss'],
})
export class CurrentPage implements OnInit {

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

  ngOnInit() {
  }

  

}



