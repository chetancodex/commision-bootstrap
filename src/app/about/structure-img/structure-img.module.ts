import { StructureImgComponent } from './structure-img.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [StructureImgComponent],
  imports: [
    CommonModule
  ],
  exports:[StructureImgComponent]
})
export class StructureImgModule { }
