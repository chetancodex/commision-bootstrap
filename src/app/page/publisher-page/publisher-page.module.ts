import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublisherPageComponent } from './publisher-page.component';
import { AboutHeroModule } from 'src/app/about/about-hero/about-hero.module';
import { PublisherWrapperModule } from 'src/app/publisher-component/publisher-wrapper/publisher-wrapper.module';
import { PublisherHandModule } from 'src/app/publisher-component/publisher-hand/publisher-hand.module';
import { EndImgPublisherModule } from 'src/app/publisher-component/end-img-publisher/end-img-publisher.module';



@NgModule({
  declarations: [PublisherPageComponent],
  imports: [
    CommonModule,
    AboutHeroModule,
    PublisherWrapperModule,
    PublisherHandModule,
    EndImgPublisherModule
  ],
  exports:[PublisherPageComponent]
})
export class PublisherPageModule { }
