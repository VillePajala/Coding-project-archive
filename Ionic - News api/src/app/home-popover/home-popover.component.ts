import { NewsapiService } from './../newsapi.service';
import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-popover',
  templateUrl: './home-popover.component.html',
  styleUrls: ['./home-popover.component.scss'],
})
export class HomePopoverComponent implements OnInit {

  // Katergoriamuuttujille määritetty suoraan arvot, jotka ajetaan sitten funktion parametrina

  yleiset : string = "yleiset";
  urheilu : string = "urheilu";
  viihde : string = "viihde";
  terveys : string = "terveys";
  matkailu : string = "matkailu";
  digi : string = "digi";


  constructor(public popoverController : PopoverController, private newsStream : NewsapiService) { }

  ngOnInit() {}


  close() {
    this.popoverController.dismiss();
  }

}
