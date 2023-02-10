import { PopoverController } from '@ionic/angular';
import { Component } from '@angular/core';
import { NewsapiService } from '../newsapi.service';
import { HomePopoverComponent } from './../home-popover/home-popover.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

constructor (private newsStream : NewsapiService, public popoverController : PopoverController ) {};

  async presentPopover(ev : any) {
    const popover = await this.popoverController.create({
      component: HomePopoverComponent,
      event: ev,
      translucent: true
    }); 
    return await popover.present();
  }

}
