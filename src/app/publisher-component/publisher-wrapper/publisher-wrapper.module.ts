import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublisherWrapperComponent } from './publisher-wrapper.component';



@NgModule({
  declarations: [PublisherWrapperComponent],
  imports: [
    CommonModule
  ],
  exports:[PublisherWrapperComponent]
})
export class PublisherWrapperModule { }
