import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'henkilotiedot', loadChildren: './henkilotiedot/henkilotiedot.module#HenkilotiedotPageModule' },
  { path: 'yhteenveto', loadChildren: './yhteenveto/yhteenveto.module#YhteenvetoPageModule' },
  { path: 'kiitos', loadChildren: './kiitos/kiitos.module#KiitosPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
