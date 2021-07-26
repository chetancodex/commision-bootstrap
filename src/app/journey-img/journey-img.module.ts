import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JourneyImgComponent } from './journey-img.component';



@NgModule({
  declarations: [
    JourneyImgComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    JourneyImgComponent
  ]
})
export class JourneyImgModule { }
