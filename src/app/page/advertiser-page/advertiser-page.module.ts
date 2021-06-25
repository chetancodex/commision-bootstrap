import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertiserPageComponent } from './advertiser-page.component';
import { AboutHeroModule } from 'src/app/about/about-hero/about-hero.module';
import { HeroWrapperModule } from 'src/app/ourVisionComponent/hero-wrapper/hero-wrapper.module';
import { PublisherHandModule } from 'src/app/publisherComponent/publisher-hand/publisher-hand.module';
import { PatnersModule } from 'src/app/ourVisionComponent/patners/patners.module';





@NgModule({
  declarations: [AdvertiserPageComponent],
  imports: [
    CommonModule,
    AboutHeroModule,
    HeroWrapperModule,
    PublisherHandModule,
    PatnersModule
  
  ],
  exports:[AdvertiserPageComponent]
})
export class AdvertiserPageModule { }
