import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqHeroSectionComponent } from './faq-hero-section.component';



@NgModule({
  declarations: [
    FaqHeroSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FaqHeroSectionComponent
  ]
})
export class FaqHeroSectionModule { }
