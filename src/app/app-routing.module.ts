import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AjoutertacheComponent } from './ajoutertache/ajoutertache.component';
import { ListertacheComponent } from './listertache/listertache.component';

const routes: Routes = [{ path:"", redirectTo: "accueil", pathMatch: 'full' },
{ path : "accueil", component: AccueilComponent },
{ path : "ajoutertache", component : AjoutertacheComponent},
{ path : "listertache", component : ListertacheComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
