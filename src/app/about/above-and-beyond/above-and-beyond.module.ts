import { AboveAndBeyondComponent } from './above-and-beyond.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [AboveAndBeyondComponent],
  imports: [
    CommonModule
  ],
  exports:[
    AboveAndBeyondComponent
  ]

})
export class AboveAndBeyondModule { }
