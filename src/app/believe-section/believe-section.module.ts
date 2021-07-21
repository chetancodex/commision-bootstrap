import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BelieveSectionComponent } from './believe-section.component';



@NgModule({
  declarations: [
    BelieveSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BelieveSectionComponent
  ]
})
export class BelieveSectionModule { }
