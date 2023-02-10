import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pituus : number;
  paino : number;
  painoindeksi : number;
  pyoristettuIndeksi : string; 
  kuvaus : string;
  tyyli : string;
  virhe : string;
  
  
  tarkastaSyote = () : void => {

    if (this.pituus >= 100 && this.pituus <= 230 && this.paino >= 30 && this.paino <= 230) {
      this.virhe = "";
      this.laskeIndeksi();
    } else {
      this.virhe = "Syöttötiedoissa on virhe. Käytä ainoastaan numeerisia arvoja: pituus 100-230 ja paino 30-230."
    }

  }

  laskeIndeksi = () : void => {
    this.painoindeksi = this.paino / (this.pituus / 100) / (this.pituus / 100); 
    this.pyoristettuIndeksi = this.painoindeksi.toFixed(2); 
    this.kategorisoiIndeksi(this.pyoristettuIndeksi);
  }

  kategorisoiIndeksi = (indeksi) : void => {

    if (indeksi < 15) {
      this.kuvaus = "Sairaalloinen alipaino";
      this.tyyli = "alert-danger";
    } else if (indeksi >= 15 && indeksi < 17) {
      this.kuvaus = "Merkittävä alipaino";
      this.tyyli = "alert-warning";
    } else if (indeksi >= 17 && indeksi < 18.5) {
      this.kuvaus = "Normaalia alhaisempi paino";
      this.tyyli = "alert-info";
    } else if (indeksi >= 18.5 && indeksi < 25) {
      this.kuvaus = "Normaali paino";
      this.tyyli = "alert-success";
    } else if (indeksi >= 25 && indeksi < 30) {
      this.kuvaus = "Lievä ylipaino";
      this.tyyli = "alert-info";
    } else if (indeksi >= 30 && indeksi < 35) {
      this.kuvaus = "Merkittävä ylipaino";
      this.tyyli = "alert-warning";
    } else if (indeksi >= 35 && indeksi < 40) {
      this.kuvaus = "Vaikea ylipaino";
      this.tyyli = "alert-danger";
    } else if (indeksi >= 40) {
      this.kuvaus = "Sairaalloinen ylipaino";
      this.tyyli = "alert-danger";
    }

  }

}
