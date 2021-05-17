import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { TbscardComponent } from './tbscard/tbscard.component';
import { OurCompanyComponent } from './our-company/our-company.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    PromotionsComponent,
    TbscardComponent,
    OurCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
