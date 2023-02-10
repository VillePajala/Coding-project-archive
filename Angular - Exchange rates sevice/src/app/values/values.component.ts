import { Component, OnInit } from '@angular/core';
import { RatesService } from '../rates.service' 


@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {

  exchangeRates : object;         
  currencyFrom : string = "";
  currencyTo : string = "";
  convertFrom : string = "";     
  convertTo : number = 0;
  amount : number = 0;
  sum : number;
  help : object = [];
  symbol : string = ""; 
  error : string = "";

  constructor(private rates : RatesService) { }

  setValues = () : void => {
    this.exchangeRates = this.rates.information; 
  }

  setBase = () : void => {
    this.rates.getRates(this.currencyFrom, this.setValues); 
    if (!this.currencyFrom){
      this.error = "Anna lähdevaluutta."; 
    } else {
      this.error = "";
    }
  }                                                         


  countAmount = () : void => { 

    if (!this.currencyTo || !this.amount) {  
      this.error = "Kohdevaluutta tai summa puuttuu."
    } else {
      this.error = "";
    }
  
    this.help = this.currencyTo.split(',');     
    this.convertTo = this.help[1];              
    this.sum = this.amount * this.convertTo;   
    this.symbol = this.help[0];
    this.convertFrom = this.currencyFrom;
  }

  ngOnInit() {
  }


}



