import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeAtVcPageComponent } from './life-at-vc-page.component';
import { AboutHeroModule } from '../../about/about-hero/about-hero.module';
import { MaxQualityPerformanceModule } from '../../about/max-quality-performance/max-quality-performance.module';
import { TeamImagesModule } from '../../vc-life-component/team-images/team-images.module';
import { LastImgWithPreviousNextModule } from '../../vc-life-component/last-img-with-previous-next/last-img-with-previous-next.module';




@NgModule({
  declarations: [LifeAtVcPageComponent],
  imports: [
    CommonModule,
    AboutHeroModule,
    
    MaxQualityPerformanceModule,
    TeamImagesModule,
    LastImgWithPreviousNextModule
    
  ],
  exports:[LifeAtVcPageComponent]
})
export class LifeAtVcPageModule { }
