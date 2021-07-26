import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersHeroSectionComponent } from './offers-hero-section.component';



@NgModule({
  declarations: [
    OffersHeroSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    OffersHeroSectionComponent
  ]
})
export class OffersHeroSectionModule { }
