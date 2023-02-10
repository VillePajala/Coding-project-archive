import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-home-popover',
  templateUrl: './home-popover.component.html',
  styleUrls: ['./home-popover.component.scss'],
})
export class HomePopoverComponent implements OnInit {

  constructor(public popoverController : PopoverController,
              public imageService : ImageService) { }

  ngOnInit() {}

  close() {
    this.popoverController.dismiss();
  }
}
