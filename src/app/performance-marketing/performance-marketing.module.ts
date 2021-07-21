import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformanceMarketingComponent } from './performance-marketing.component';
import { HeaderModule } from 'src/app/header/header.module';
import { PerformanceMarketingHeroSectionModule } from '../page/performance-marketing-hero-section/performance-marketing-hero-section.module';
import { BelieveSectionModule } from '../believe-section/believe-section.module';
import { PerformanceMarketingImgModule } from '../performance-marketing-img/performance-marketing-img.module';
import { ResultSectionModule } from '../result-section/result-section.module';
import { ResultImgModule } from '../result-img/result-img.module';
import { GrowthSectionModule } from '../growth-section/growth-section.module';
import { PaginationSectionModule } from '../pagination-section/pagination-section.module';



@NgModule({
  declarations: [
    PerformanceMarketingComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    PerformanceMarketingHeroSectionModule,
    BelieveSectionModule,
    PerformanceMarketingImgModule,
    ResultSectionModule,
    ResultImgModule,
    GrowthSectionModule,
    PaginationSectionModule
  ],
  exports:[
    PerformanceMarketingComponent
  ]
})
export class PerformanceMarketingModule { }
