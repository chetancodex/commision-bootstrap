import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorseImgComponent } from './horse-img.component';



@NgModule({
  declarations: [HorseImgComponent],
  imports: [
    CommonModule
  ],
  exports:[
    HorseImgComponent
  ]
})
export class HorseImgModule { }
