import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceHeroSectionComponent } from './ecommerce-hero-section.component';



@NgModule({
  declarations: [
    EcommerceHeroSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EcommerceHeroSectionComponent
  ]
})
export class EcommerceHeroSectionModule { }
