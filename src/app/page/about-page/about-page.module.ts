import { MaxQualityPerformanceModule } from './../../about/max-quality-performance/max-quality-performance.module';
import { AboutHeroModule } from './../../about/about-hero/about-hero.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page.component';
import { AboveAndBeyondModule } from 'src/app/about/above-and-beyond/above-and-beyond.module';
import { HorseImgModule } from 'src/app/about/horse-img/horse-img.module';
import { AffilateMarketingModule } from 'src/app/about/affilate-marketing/affilate-marketing.module';
import { StructureImgModule } from 'src/app/about/structure-img/structure-img.module';
import { EndImgModule } from 'src/app/about/end-img/end-img.module';



@NgModule({
  declarations: [AboutPageComponent],
  imports: [
    CommonModule,
    AboutHeroModule,
    MaxQualityPerformanceModule,
    AboveAndBeyondModule,
    HorseImgModule,
    AffilateMarketingModule,
    StructureImgModule,
    EndImgModule
  ],
  exports:[AboutPageComponent]
})
export class AboutPageModule { }
