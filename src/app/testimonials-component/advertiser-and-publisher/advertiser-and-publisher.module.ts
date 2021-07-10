import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertiserAndPublisherComponent } from './advertiser-and-publisher.component';



@NgModule({
  declarations: [AdvertiserAndPublisherComponent],
  imports: [
    CommonModule
  ],
  exports:[AdvertiserAndPublisherComponent]
})
export class AdvertiserAndPublisherModule { }
