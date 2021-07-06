
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageModule } from './page/about-page/about-page.module';
import { AdvertiserPageModule } from './page/advertiser-page/advertiser-page.module';
import { AffilateMarketingPageModule } from './page/affilate-marketing-page/affilate-marketing-page.module';
import { HomePageModule } from './page/home-page/home-page.module';
import { OurVisionPageModule } from './page/our-vision-page/our-vision-page.module';
import { PublisherPageModule } from './page/publisher-page/publisher-page.module';
import { TestimonialsPageModule } from './page/testimonials-page/testimonials-page.module';
import { LifeAtVcPageComponent } from './page/life-at-vc-page/life-at-vc-page.component';
import { OffersPageModule } from './page/offers-page/offers-page.module';
import { FAQPageModule } from './page/faq-page/faq-page.module';


















@NgModule({
  declarations: [
    AppComponent,
    LifeAtVcPageComponent,
    
    
    
    
  
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HomePageModule,
    AboutPageModule,
    OurVisionPageModule,
    AffilateMarketingPageModule,
    PublisherPageModule,
    AdvertiserPageModule,
    TestimonialsPageModule,
    OffersPageModule,
    FAQPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
