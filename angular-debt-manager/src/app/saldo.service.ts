import { Injectable } from '@angular/core';
import { Velat } from './Velat'

@Injectable({
  providedIn: 'root'
})
export class SaldoService {

  saatavat : Velat[] = [
    {
        id : 1,
        nimi : "Pekka",
        summa : 200
    }
    ];

  velat : Velat[] = [
    {
        id : 1,
        nimi : "Simo",
        summa : 100
    }
    ];

  laskeVelat = () : number => {
    let velatYhteensa : number = 0;
    
    this.velat.forEach((velka) => {
      velatYhteensa =  Number(velatYhteensa) + Number(velka.summa); 
    })
    return velatYhteensa;
  }

    
  laskeSaatavat = () : number => {
    let saatavatYhteensa : number = 0;

    this.saatavat.forEach((saatava) => {
      saatavatYhteensa = Number(saatavatYhteensa) + Number(saatava.summa);
    })
    return saatavatYhteensa;
  }

  constructor() {}



}


