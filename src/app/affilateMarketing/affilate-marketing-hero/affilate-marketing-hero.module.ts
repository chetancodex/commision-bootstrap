import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AffilateMarketingHeroComponent } from './affilate-marketing-hero.component';
import { AboutHeroModule } from 'src/app/about/about-hero/about-hero.module';



@NgModule({
  declarations: [AffilateMarketingHeroComponent],
  imports: [
    CommonModule,
    AboutHeroModule
  ],
  exports:[
    AffilateMarketingHeroComponent
  ]
})
export class AffilateMarketingHeroModule { }
