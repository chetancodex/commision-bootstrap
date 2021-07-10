import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AffilateMarketingPageComponent } from './affilate-marketing-page.component';
import { HeaderModule } from 'src/app/header/header.module';
import { AboutHeroModule } from 'src/app/about/about-hero/about-hero.module';
import { AffilateMarketingHeroWrapperModule } from 'src/app/affilate-marketing/affilate-marketing-hero-wrapper/affilate-marketing-hero-wrapper.module';
import { ChessImgContentModule } from 'src/app/affilate-marketing/chess-img-content/chess-img-content.module';
import { AffilateMarketingHeadPhoneModule } from 'src/app/affilate-marketing/affilate-marketing-head-phone/affilate-marketing-head-phone.module';
import { StepByStepProcessModule } from 'src/app/affilate-marketing/step-by-step-process/step-by-step-process.module';
import { PreviousNextModule } from 'src/app/affilate-marketing/previous-next/previous-next.module';




@NgModule({
  declarations: [AffilateMarketingPageComponent],
  imports: [
    CommonModule,
    HeaderModule,
    AboutHeroModule,
    AffilateMarketingHeroWrapperModule,
    ChessImgContentModule,
    AffilateMarketingHeadPhoneModule,
    StepByStepProcessModule,
    PreviousNextModule





    
    
  ],
  exports:[AffilateMarketingPageComponent]
})
export class AffilateMarketingPageModule { }
