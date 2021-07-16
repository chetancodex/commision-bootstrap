import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformanceMarketingComponent } from './performance-marketing.component';
import { HeaderModule } from 'src/app/header/header.module';



@NgModule({
  declarations: [
    PerformanceMarketingComponent
  ],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports:[
    PerformanceMarketingComponent
  ]
})
export class PerformanceMarketingModule { }
