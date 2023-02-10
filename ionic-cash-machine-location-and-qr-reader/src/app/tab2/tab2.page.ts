import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  url : any;

  constructor(private barcodeScanner: BarcodeScanner,
              private iab: InAppBrowser) {
  }

  scanBarcode = () : void => {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.url = barcodeData.text;
      this.openInBrowser();
     }).catch(err => {
         console.log('Error', err);
     });
  }

  openInBrowser = () : void => {
    this.iab.create(this.url, "_blank")
  }


}

