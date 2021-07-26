import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadGenrationHeroSectionComponent } from './lead-genration-hero-section.component';



@NgModule({
  declarations: [
    LeadGenrationHeroSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LeadGenrationHeroSectionComponent
  ]
})
export class LeadGenrationHeroSectionModule { }
