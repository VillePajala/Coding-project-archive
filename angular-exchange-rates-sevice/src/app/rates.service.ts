import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RatesService {

  information : object = [];  
  source : string = "";
  id : string = "";


  private apiUrl : string = "https://api.exchangeratesapi.io/latest";

  constructor(private http : HttpClient) { }

  getRates = (id, callback) : any => {
    if (id) { 
      this.source = `?base=${id}`
    }
    this.http.get(this.apiUrl+this.source).subscribe((data : any) => {
      this.information = data;
      callback();
    },
    (err : any) => {
      console.log(err);
    });
  }


}
