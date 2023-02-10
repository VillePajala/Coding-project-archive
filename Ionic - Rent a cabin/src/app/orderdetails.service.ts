import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailsService {

  orderSummary : any[] = [];
  personalData : any[] = [];
  finishedOrder : any[] = [];

  constructor() {}

}

