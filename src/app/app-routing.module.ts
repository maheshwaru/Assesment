import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {tvshowComponent } from './Tvshows/tvshow.component';
import {tvshowDetailsComponent} from './Tvdetails/tvshowdetails.component';

const routes: Routes = [
   { path: '', component: tvshowComponent },
  { path: 'Home', component: tvshowComponent },
  { path: 'showdetails/:id', component: tvshowDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
