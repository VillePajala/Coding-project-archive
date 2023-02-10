import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VelatComponent } from './velat/velat.component';
import { SaatavatComponent } from './saatavat/saatavat.component';

const reitit : Routes = [{
path : "velat",
component : VelatComponent
},
{
path : "saatavat",
component : SaatavatComponent
}/* ,
{
path : "",
component : AppComponent
  } */
];

@NgModule({
  declarations: [
    AppComponent,
    VelatComponent,
    SaatavatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(reitit)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



