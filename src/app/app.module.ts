import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {TestComponent} from './test/test.component';
import {GlavnaStranaComponent} from "./glavna-strana/glavna-strana.component";


@NgModule({
  declarations: [
    AppComponent,
    GlavnaStranaComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
