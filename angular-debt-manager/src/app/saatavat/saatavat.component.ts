import { Component, OnInit } from '@angular/core';
import { Velat } from '../Velat';
import { SaldoService } from '../saldo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saatavat',
  templateUrl: './saatavat.component.html',
  styleUrls: ['./saatavat.component.css']
})
export class SaatavatComponent implements OnInit {

  id : number;
  nimi : string;
  summa : number;

  constructor(private saatavat : SaldoService, private router : Router) { }

  ngOnInit() {
  }

  kaikkiSaatavat : Velat[] = this.saatavat.saatavat;


  laskeVelat = () : number => {
    let velatYhteensa : number = 0;

    this.saatavat.velat.forEach((velka) => {
      velatYhteensa =  Number(velatYhteensa) + Number(velka.summa);  
    })
    return velatYhteensa;
  }

    
  laskeSaatavat = () : number => {
    let saatavatYhteensa : number = 0;

    this.saatavat.saatavat.forEach((saatava) => {
      saatavatYhteensa = Number(saatavatYhteensa) + Number(saatava.summa);
    })
    return saatavatYhteensa;
  }

  lisaaUusi = () : void  => {
    let id : number;
    
    if (this.saatavat.saatavat.length == 0) {
      id = 1
    } else {
      id = this.saatavat.saatavat[this.saatavat.saatavat.length - 1].id +1;
    }

    let uusiSaatava : Velat = {
                      "id" : id,
                      "nimi" : this.nimi,
                      "summa" : this.summa
    }
    
    this.saatavat.saatavat.push(uusiSaatava);
  }

  poistaSaatava = (id) : void  => {

    for(let i = 0; i < this.saatavat.saatavat.length; ++i){
      if (this.saatavat.saatavat[i].id === id) {
          this.saatavat.saatavat.splice(i,1);
      }
    }
  }

}



