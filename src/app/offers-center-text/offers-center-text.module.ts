import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersCenterTextComponent } from './offers-center-text.component';



@NgModule({
  declarations: [
    OffersCenterTextComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    OffersCenterTextComponent
  ]
})
export class OffersCenterTextModule { }
