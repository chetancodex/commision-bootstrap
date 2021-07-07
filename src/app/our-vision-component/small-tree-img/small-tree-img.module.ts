import { HorseImgModule } from 'src/app/about/horse-img/horse-img.module';
import { SmallTreeImgComponent } from './small-tree-img.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [SmallTreeImgComponent],
  imports: [
    CommonModule,
    HorseImgModule
  ],
  exports:[SmallTreeImgComponent]
})
export class SmallTreeImgModule { }
