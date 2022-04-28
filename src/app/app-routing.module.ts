import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GlavnaStranaComponent} from "./glavna-strana/glavna-strana.component";
import {RouterModule, Routes} from "@angular/router";
import {TestComponent} from "./test/test.component";


const routes: Routes = [
  {path: '', component: GlavnaStranaComponent},
  {path: 'Test', component: TestComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
