import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamImagesComponent } from './team-images.component';



@NgModule({
  declarations: [TeamImagesComponent],
  imports: [
    CommonModule
  ],
  exports:[TeamImagesComponent]
})
export class TeamImagesModule { }
