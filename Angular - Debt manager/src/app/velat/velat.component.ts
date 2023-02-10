import { Component, OnInit } from '@angular/core';
import { SaldoService } from '../saldo.service';
import { Velat } from '../Velat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-velat',
  templateUrl: './velat.component.html',
  styleUrls: ['./velat.component.css']
})
export class VelatComponent implements OnInit {

  id : number;
  nimi :string;
  summa : number;

  constructor(private velat : SaldoService,  private router : Router) { }

  ngOnInit() {
  }

  kaikkiVelat : Velat[] = this.velat.velat;

  laskeVelat = () : number => {
    let velatYhteensa : number = 0;
    
    this.velat.velat.forEach((velka) => {
      velatYhteensa =  Number(velatYhteensa) + Number(velka.summa); 
    })
    return velatYhteensa;
  }

    
  laskeSaatavat = () : number => {
    let saatavatYhteensa : number = 0;

    this.velat.saatavat.forEach((saatava) => {
      saatavatYhteensa = Number(saatavatYhteensa) + Number(saatava.summa);
    })
    return saatavatYhteensa;
  }

  lisaaUusi = () : void  => {
    let id : number;
    
    if (this.velat.velat.length == 0) {
      id = 1
    } else {
      id = this.velat.velat[this.velat.velat.length - 1].id +1;
    }

    let uusiVelka : Velat = {
                      "id" : id,
                      "nimi" : this.nimi,
                      "summa" : this.summa
    }
    this.velat.velat.push(uusiVelka)
  }

  poistaVelka = (id) : void  => {
    for(let i = 0; i < this.velat.velat.length; ++i){
      if (this.velat.velat[i].id === id) {
          this.velat.velat.splice(i,1);
      }
    }
  }

}



