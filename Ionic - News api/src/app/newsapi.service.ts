import { PopoverController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  news : any[] = null; 

  oldDate : Date;      

  apiUrl : string ="https://so3server.herokuapp.com/uutiset";       
  apiUrlCheck : string="https://so3server.herokuapp.com/uutiset";   

  currentDate : Date;

  constructor(private http : HttpClient, public popoverController : PopoverController) {

    this.http.get(this.apiUrl).subscribe((data : any[]) => {
    this.news = data;
    this.oldDate = new Date();      
    this.currentDate = new Date();

    });
  }

  refreshData = () : void => {
    this.http.get(this.apiUrl).subscribe((data : any[]) => {
    this.news = [];
    this.news = data;
    this.oldDate = this.currentDate;    
    this.currentDate = new Date();      
    this.sortData();                    
    });
  }

  sortData = () : void => {
    this.news.sort((a, b) => parseFloat(b.aikaleima) - parseFloat(a.aikaleima));
  }

  getByCategory = (id) : void => {
    let category : string = id;

    if (!id || id == "yleiset") {  
      this.apiUrl = this.apiUrlCheck;   
      this.refreshData();     
      this.popoverController.dismiss();
    } else {

      if (this.apiUrl == this.apiUrlCheck) {    
        this.apiUrl = this.apiUrl + "/" + category;         
      } else {                                 
        this.apiUrl = this.apiUrlCheck + "/" + category;                                                                 
      }

      this.refreshData();                  
      this.popoverController.dismiss();     
    }
  }
  
}
