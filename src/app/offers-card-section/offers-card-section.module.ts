import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersCardSectionComponent } from './offers-card-section.component';



@NgModule({
  declarations: [
    OffersCardSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    OffersCardSectionComponent
  ]
})
export class OffersCardSectionModule { }
