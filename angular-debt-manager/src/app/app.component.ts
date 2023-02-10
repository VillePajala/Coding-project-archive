import { Component } from '@angular/core';
import { SaldoService } from './saldo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private saldo : SaldoService) { }

  laskeVelat = () : number => {

    let velatYhteensa : number = 0;
    
    this.saldo.velat.forEach((velka) => {
      velatYhteensa =  Number(velatYhteensa) + Number(velka.summa); 
      // vahvan tyypityksen piti estää estää väärät tietotyypit, mutta yhteenlaskussa funktio kohtelee 
      // kahta numbertyyppistä muuttuja silti stringeinä. Ne on pakko kääntää täällä numeroiksi tai muuten
      // tulee vain jatkuvasti kasvava stringi luvuista! Ymmärsin, että tietotyypeillä pitää olla ensin jokin
      // arvo, että ne todella määrittyvät oikein, mutta en kyllä saanut sitä niinkään toimimaan :)
    })
    return velatYhteensa;
  }

  laskeSaatavat = () : number => {

    let saatavatYhteensa : number = 0;

    this.saldo.saatavat.forEach((saatava) => {
      saatavatYhteensa = Number(saatavatYhteensa) + Number(saatava.summa);
    })
    return saatavatYhteensa;
  }

}




