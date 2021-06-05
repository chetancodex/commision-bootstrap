import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChessComponent } from './chess.component';



@NgModule({
  declarations: [
    ChessComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ChessComponent
  ]
})
export class ChessModule { }
