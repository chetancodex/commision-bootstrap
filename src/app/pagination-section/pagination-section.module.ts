import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationSectionComponent } from './pagination-section.component';



@NgModule({
  declarations: [
    PaginationSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PaginationSectionComponent
  ]
})
export class PaginationSectionModule { }
