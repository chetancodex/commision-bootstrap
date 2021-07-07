import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnersPageComponent } from './partners-page.component';
import { AboutHeroModule } from '../../about/about-hero/about-hero.module';
import { CompanyListModule } from '../../partnersComponent/company-list/company-list.module';
import { LastImgWithPreviousNextModule } from 'src/app/vCLifeComponent/last-img-with-previous-next/last-img-with-previous-next.module';




@NgModule({
  declarations: [PartnersPageComponent],
  imports: [
    CommonModule,
    AboutHeroModule,
    CompanyListModule,
    LastImgWithPreviousNextModule
  ],
  exports:[PartnersPageComponent]
})
export class PartnersPageModule { }
