import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviousNextComponent } from './previous-next.component';



@NgModule({
  declarations: [PreviousNextComponent],
  imports: [
    CommonModule
  ],
  exports:[PreviousNextComponent]
})
export class PreviousNextModule { }
