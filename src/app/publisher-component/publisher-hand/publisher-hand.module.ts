import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublisherHandComponent } from './publisher-hand.component';



@NgModule({
  declarations: [PublisherHandComponent],
  imports: [
    CommonModule
  ],
  exports:[PublisherHandComponent]
})
export class PublisherHandModule { }
