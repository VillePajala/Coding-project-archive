import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HenkilotiedotPage } from './henkilotiedot.page';

const routes: Routes = [
  {
    path: '',
    component: HenkilotiedotPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HenkilotiedotPage]
})
export class HenkilotiedotPageModule {}
