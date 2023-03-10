import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { 
        path: 'current',
        loadChildren: '../current/current.module#CurrentPageModule' 
      },
      { 
        path: 'forecast',
        loadChildren: '../forecast/forecast.module#ForecastPageModule' 
      },
      { 
        path: 'settings',
        loadChildren: '../settings/settings.module#SettingsPageModule' 
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/current',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
