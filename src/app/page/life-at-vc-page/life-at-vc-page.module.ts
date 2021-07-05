import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeAtVcPageComponent } from './life-at-vc-page.component';
import { AboutHeroModule } from 'src/app/about/about-hero/about-hero.module';
import { MaxQualityPerformanceModule } from 'src/app/about/max-quality-performance/max-quality-performance.module';
import { TeamImagesModule } from 'src/app/vCLifeComponent/team-images/team-images.module';



@NgModule({
  declarations: [LifeAtVcPageComponent],
  imports: [
    CommonModule,
    AboutHeroModule,
    MaxQualityPerformanceModule,
    TeamImagesModule
  ],
  exports:[LifeAtVcPageComponent]
})
export class LifeAtVcPageModule { }
