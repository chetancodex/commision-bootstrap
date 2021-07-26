import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QualifiedSectionComponent } from './qualified-section.component';


@NgModule({
  declarations: [
    QualifiedSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    QualifiedSectionComponent
  ]
})
export class QualifiedSectionModule { }
