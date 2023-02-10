import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-newsitem',
  templateUrl: './newsitem.page.html',
  styleUrls: ['./newsitem.page.scss'],
})
export class NewsitemPage implements OnInit {

  newsitem : any;

  constructor(private route : ActivatedRoute, private newsStream : NewsapiService) { }

  ngOnInit() {  // Haetaan oikean uutisen tiedot

     let index = Number(this.route.snapshot.paramMap.get("index"));

     this.newsitem = this.newsStream.news[index];

  }

 

}
