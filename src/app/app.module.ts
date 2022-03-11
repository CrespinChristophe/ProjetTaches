import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AjoutertacheComponent } from './ajoutertache/ajoutertache.component';
import { ListertacheComponent } from './listertache/listertache.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AjoutertacheComponent,
    ListertacheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
