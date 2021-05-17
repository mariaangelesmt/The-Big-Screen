import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { OurCompanyComponent } from './our-company/our-company.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { TbscardComponent } from './tbscard/tbscard.component';

const routes: Routes = [
  {
    path: 'films',
    component: FilmsComponent
  },
  {
    path: 'promotions',
    component: PromotionsComponent
  },
  {
    path: 'tbscard',
    component: TbscardComponent
  },
  {
    path: 'ourCompany',
    component: OurCompanyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
