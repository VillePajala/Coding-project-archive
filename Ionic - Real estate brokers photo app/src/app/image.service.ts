import { AlertController, PopoverController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  image : string = "";
  imageError : string = "";
  figCaption : string = "";
  imageArray : any[] = [];
  maxImageCount = 0;

  constructor(private camera : Camera,
              private dialogueCtrl : AlertController,                               
              public popoverController : PopoverController) { }


  takePicture = () : void => {
    let settings : CameraOptions = {
                                      quality : 70,
                                      destinationType : 0,
                                      targetHeight : 460,
                                      correctOrientation : true
                                   }

    this.camera.getPicture(settings).then((imageData) =>{
      this.imageError = "";
      this.image = `data:image/jpeg;base64,${imageData}`;
      this.setFigcaption();
      this.popoverController.dismiss();
      
    }).catch((err) => {
      this.imageError = "Kuvaa ei voida näyttää";
    } )
  }

  
  choosePicture = () : void => {
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
      this.setFigcaption();
      this.popoverController.dismiss();
      
    }).catch((err) => {
      this.imageError = "Kuvaa ei voida näyttää";
    } )
  }

  setFigcaption = async () : Promise<any> => {
    const alertWindow = await this.dialogueCtrl.create({
                                                    header: "Nimi",
                                                    message : "Millä nimellä kuva tallennetaan?",
                                                    inputs : [  
                                                                {
                                                                  name : "figCaption",
                                                                  type : "text",
                                                                  placeholder : "esim. keittiö, sauna.."
                                                                }
                                                              ],
                                                    buttons : [
                                                                {
                                                                  text : "Tallenna",
                                                                  handler : (data : any) => {
                                                                            this.figCaption = data.figCaption;
                                                                            this.saveData();
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

  saveData = () : void => {
    let timestamp = new Date().getTime();
    let newItem : any = {
                          "image" : this.image,
                          "name" : this.figCaption,
                          "timestamp" : timestamp
                        }

    this.imageArray.push(newItem);
    /* this.maxImageCount = this.maxImageCount + 1;  */ // Mekanismi kuvamäärän rajoittamiseksi
  
  }

  confirmDelete = async (id) : Promise<any> => {
    let identification = id;
    const alertWindow = await this.dialogueCtrl.create({
                                                    header: "Varoitus!",
                                                    message : "Haluatko varmasti poistaa kuvan?",
                                                    inputs : [  
                                                              ],
                                                    buttons : [
                                                                {
                                                                  text : "Poista kuva",
                                                                  handler : (data : any) => {
                                                                            this.deleteImage(identification);
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

  deleteImage = (id) : void => {
    let i = 0;
    this.imageArray.forEach((image) => {
      if (image.timestamp == id) {
        this.imageArray.splice(i);
      }
      i = i + 1;
    })
  }


}
