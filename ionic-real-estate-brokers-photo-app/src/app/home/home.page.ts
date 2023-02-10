import { ImageService } from './../image.service';
import { HomePopoverComponent } from './../home-popover/home-popover.component';
import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  slideOpts = {
    effect: 'flip'
  };

  constructor (public popoverController : PopoverController,
               private imageService : ImageService) {

  }

  async presentPopover(ev : any) {
    const popover = await this.popoverController.create({
      component: HomePopoverComponent,
      event: ev,
      translucent: true
    }); 
    return await popover.present();
  }

}


