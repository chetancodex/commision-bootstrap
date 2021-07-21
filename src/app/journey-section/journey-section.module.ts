import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JourneySectionComponent } from './journey-section.component';



@NgModule({
  declarations: [
    JourneySectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    JourneySectionComponent
  ]
})
export class JourneySectionModule { }
