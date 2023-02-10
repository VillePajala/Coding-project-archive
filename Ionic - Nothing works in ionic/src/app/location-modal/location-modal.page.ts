import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DatabaseService } from './../database.service';
import { ModalController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-modal',
  templateUrl: './location-modal.page.html',
  styleUrls: ['./location-modal.page.scss'],
})
export class LocationModalPage implements OnInit {

  imageError : string;
  image : string;

  constructor(private mocalController : ModalController,
              private database : DatabaseService,
              private dialogueCtrl : AlertController,
              private camera : Camera,
              ) { }

  ngOnInit() {
  }

  takaisin = () : void => {
    this.mocalController.dismiss();
  }

  lisaaKuva = async (id) : Promise<any> => {
    const alertWindow = await this.dialogueCtrl.create({
                                                    header: "Lisää kuva",
                                                    message : "Haluatko ottaa uuden kuvan vai listätä galleriasta?",
                                                    buttons : [
                                                                {
                                                                  text : "Ota uusi kuva",
                                                                  handler : (data : any) => {
                                                                            this.otaKuva(id);
                                                                            
                                                                          }
                                                                },
                                                                {
                                                                  text : "hae galleriasta",
                                                                  handler : (data : any) => {
                                                                            this.valitseKuva(id);
                                                                            
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

  otaKuva = (id) : void => {
    let settings : CameraOptions = {
                                      quality : 70,
                                      destinationType : 0,
                                      targetHeight : 460,
                                      correctOrientation : true
                                   }

    this.camera.getPicture(settings).then((imageData) =>{
      this.imageError = "";
      this.image = `data:image/jpeg;base64,${imageData}`;
      this.tallennaKuva(id);
      
    }).catch((err) => {
      this.imageError = "Kuvaa ei voida näyttää";
    } )
  }

  
  valitseKuva = (id) : void => {
    let settings : CameraOptions = {
                                      quality : 70,
                                      destinationType : 0,
                                      targetHeight : 470,
                                      correctOrientation : true,
                                      sourceType : 2
                                   }

    this.camera.getPicture(settings).then((imageData) =>{
      this.imageError = "";
      this.image = `data:image/jpeg;base64,${imageData}`;
      this.tallennaKuva(id);
    }).catch((err) => {
      this.imageError = "Kuvaa ei voida näyttää";
    } )
  }
  

  tallennaKuva = (id) : void => {
    let timestamp = new Date().getTime();
    let newItem : any = {
                          "image" : this.image,
                          "id" : id,
                          "timestamp" : timestamp
                        }

    this.database.paivitaKuvat(newItem);
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
                                                                            this.mocalController.dismiss();
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


