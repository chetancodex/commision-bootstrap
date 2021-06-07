import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurVisionComponent } from './our-vision.component';



@NgModule({
  declarations: [OurVisionComponent],
  imports: [
    CommonModule
  ],
  exports:[
    OurVisionComponent
  ]

})
export class OurVisionModule { }
