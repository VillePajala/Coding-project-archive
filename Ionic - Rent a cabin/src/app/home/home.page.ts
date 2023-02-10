import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderdetailsService } from '../orderdetails.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  mokkiHinta : number = 0;
  mokkiTyyppi :string = "";
  varauspaiva : string = "";
  kesto : number = 0;
  siivous : boolean = false;

  virhe : string;
  loppusumma : number = 0;
  cabinRented : boolean = false;

  constructor (private router : Router, private orders : OrderdetailsService) {
    
  }

  
  goForward = () : void => {
    this.router.navigate(["henkilotiedot"]);
  }

  checkInput = () : void => {
    if (this.mokkiHinta == 0 || !this.varauspaiva || this.kesto == 0) {
      this.virhe = "Syötä pakolliset tiedot: Mökin tyyppi, varauspäivä ja varauksen kesto";
    } else {
      this.rentCabin();
    }
  }
  
  rentCabin = () : void => {
    this.cabinRented = true; 
    this.saveOrder();
  }

  saveOrder = () : void => {
    this.virhe = "";
    let loppuSiivous : string = "Ei loppusiivousta";

    if (this.siivous == true) {
      loppuSiivous = "Kyllä"
    }

    if (this.mokkiHinta == 33) {
      this.mokkiTyyppi = "Kimppa";
    } else if (this.mokkiHinta == 46) {
      this.mokkiTyyppi = "Perus 2h";
    } else if (this.mokkiHinta == 66) {
      this.mokkiTyyppi = "Perus 4h";
    } else if (this.mokkiHinta == 157) {
      this.mokkiTyyppi = "Luksus";
    } 

    let newOrder : any = {
                            "mokkiHinta" : this.mokkiHinta,
                            "mokkiTyyppi" : this.mokkiTyyppi,
                            "varauspaiva" : this.varauspaiva,
                            "kesto" : this.kesto,
                            "loppuSiivous" : loppuSiivous
                        }
                        
  this.orders.orderSummary.push(newOrder);
  }
}


