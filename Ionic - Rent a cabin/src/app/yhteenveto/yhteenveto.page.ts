import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderdetailsService } from '../orderdetails.service';

@Component({
  selector: 'app-yhteenveto',
  templateUrl: './yhteenveto.page.html',
  styleUrls: ['./yhteenveto.page.scss'],
})
export class YhteenvetoPage implements OnInit {

  summary : any[] = [];
  personalData : any[] = [];

  constructor(private router : Router, private orders : OrderdetailsService) {
    this.summary = this.orders.orderSummary;
    this.personalData = this.orders.personalData;
   }

  goBack = () : void => {
    this.router.navigate(["henkilotiedot"]);
  }

  goForward = () : void => {
    this.router.navigate(["kiitos"]);
  }

  getSummary = () : void => {
    this.summary = this.orders.orderSummary;
  }

  confirmOrder = () : void => {
    let loppuSumma : number;

    if (this.summary[0].loppuSiivous == "Kyllä") {
      loppuSumma = this.summary[0].mokkiHinta * this.summary[0].kesto +  100;
    } else {
      loppuSumma = this.summary[0].mokkiHinta * this.summary[0].kesto;
    }

    let confirmedOrder = {
                        "nimi" : this.personalData[0].nimi,
                        "puhelinnumer" : this.personalData[0].puhelin,
                        "email" : this.personalData[0].email,
                        "mokkiTyyppi" : this.summary[0].mokkiTyyppi,
                        "hinta" : this.summary[0].mokkiHinta,
                        "vuokrauspaiva" : this.summary[0].varauspaiva,
                        "kesto" : this.summary[0].kesto,
                        "maksutapa" : this.personalData[0].maksutapa,
                        "loppuSiivous" : this.summary[0].loppuSiivous,
                        "loppuSumma" : loppuSumma
                        }

    this.orders.finishedOrder.push(confirmedOrder);
    this.goForward();
  }

  ngOnInit() {
  }

}
