import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AffilateMarketingPageComponent } from './affilate-marketing-page.component';
import { HeaderModule } from 'src/app/header/header.module';
import { AboutHeroModule } from 'src/app/about/about-hero/about-hero.module';
import { AffilateMarketingHeroWrapperModule } from 'src/app/affilateMarketing/affilate-marketing-hero-wrapper/affilate-marketing-hero-wrapper.module';




@NgModule({
  declarations: [AffilateMarketingPageComponent],
  imports: [
    CommonModule,
    HeaderModule,
    AboutHeroModule,
    AffilateMarketingHeroWrapperModule
  ],
  exports:[AffilateMarketingPageComponent]
})
export class AffilateMarketingPageModule { }
