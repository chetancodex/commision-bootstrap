import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialsPageComponent } from './testimonials-page.component';
import { AboutHeroModule } from 'src/app/about/about-hero/about-hero.module';
import { AdvertiserAndPublisherModule } from 'src/app/testimonialsComponent/advertiser-and-publisher/advertiser-and-publisher.module';



@NgModule({
  declarations: [TestimonialsPageComponent],
  imports: [
    CommonModule,
    AboutHeroModule,
    AdvertiserAndPublisherModule
  ],
  exports:[TestimonialsPageComponent]
})
export class TestimonialsPageModule { }
