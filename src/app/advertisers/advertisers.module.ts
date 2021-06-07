import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertisersComponent } from './advertisers.component';



@NgModule({
  declarations: [
    AdvertisersComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AdvertisersComponent
  ]
})
export class AdvertisersModule { }
