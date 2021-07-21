import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrowthSectionComponent } from './growth-section.component';



@NgModule({
  declarations: [
    GrowthSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GrowthSectionComponent
  ]
})
export class GrowthSectionModule { }
