import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GlavnaStranaComponent } from './glavna-strana/glavna-strana.component';
import {RouterModule, Routes} from "@angular/router";


const appRoute: Routes = [
  {path: 'GlavnaStrana', component:GlavnaStranaComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    GlavnaStranaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
