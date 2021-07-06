import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastImgWithPreviousNextComponent } from './last-img-with-previous-next.component';



@NgModule({
  declarations: [LastImgWithPreviousNextComponent],
  imports: [
    CommonModule
  ],
  exports:[LastImgWithPreviousNextComponent]
})
export class LastImgWithPreviousNextModule { }
