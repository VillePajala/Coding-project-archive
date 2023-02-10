import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderdetailsService } from '../orderdetails.service';

@Component({
  selector: 'app-kiitos',
  templateUrl: './kiitos.page.html',
  styleUrls: ['./kiitos.page.scss'],
})
export class KiitosPage implements OnInit {

  constructor(private router : Router, private orders : OrderdetailsService) { }

  goHome = () : void => {
    
    this.orders.orderSummary = [];
    this.orders.personalData = [];
    this.orders.finishedOrder = [];
    this.router.navigate([""]);
  }

  ngOnInit() {
  }

}
