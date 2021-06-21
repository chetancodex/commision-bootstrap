import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChessImgContentComponent } from './chess-img-content.component';



@NgModule({
  declarations: [ChessImgContentComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ChessImgContentComponent
  ],
})
export class ChessImgContentModule { }
