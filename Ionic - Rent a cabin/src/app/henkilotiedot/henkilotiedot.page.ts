import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderdetailsService } from '../orderdetails.service';

@Component({
  selector: 'app-henkilotiedot',
  templateUrl: './henkilotiedot.page.html',
  styleUrls: ['./henkilotiedot.page.scss'],
})
export class HenkilotiedotPage implements OnInit {

  personSaved : boolean;
  nimi : string = "";
  tel : number = 0;
  email : string = "";
  maksutapa : string = "";
  virhe : string;

  constructor(private router : Router, private personalData : OrderdetailsService) { 
    
  }

  goBack = () : void => {
    this.router.navigate(["home"]);
  }

  goForward = () : void => {
    this.router.navigate(["yhteenveto"]);
  }

  checkInput = () : void => {   
    if (!this.nimi|| !this.tel || !this.email || !this.maksutapa) {       
      this.virhe = "Syötä pakolliset tiedot: Nimi, puhelinnumero, sähköposti ja maksutapa";
    } else {
      this.savePerson();
    }
  }

  savePerson = () : void => {  
    this.personSaved = true;  // Muutetaan muuttujan arvoa, että saadaan vahvistus näkyviin
    this.saveOrder();
  }

  saveOrder = () : void => {   
    this.virhe = "";
    let newPerson : any = {
                            "nimi" : this.nimi,
                            "puhelin" : this.tel,
                            "email" : this.email,
                            "maksutapa" : this.maksutapa
                        }
  this.personalData.personalData.push(newPerson);
  }
  
  ngOnInit() {
  }

}


