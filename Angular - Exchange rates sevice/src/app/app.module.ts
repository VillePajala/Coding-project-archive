import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { ValuesComponent } from './values/values.component';
import { FormsModule } from '@angular/forms'



const routes : Routes = [
                          {
                            path : "",
                            component : ValuesComponent
                          }
                        ]

@NgModule({
  declarations: [
    AppComponent,
    ValuesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
