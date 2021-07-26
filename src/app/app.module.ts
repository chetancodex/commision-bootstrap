
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageModule } from './page/about-page/about-page.module';
import { AdvertiserPageModule } from './page/advertiser-page/advertiser-page.module';
import { AffilateMarketingPageModule } from './page/affilate-marketing-page/affilate-marketing-page.module';
import { HomePageModule } from './page/home-page/home-page.module';
import { LifeAtVcPageModule } from './page/life-at-vc-page/life-at-vc-page.module';
import { OurVisionPageModule } from './page/our-vision-page/our-vision-page.module';
import { PartnersPageModule } from './page/partners-page/partners-page.module';
import { PaymentPageModule } from './page/payment-page/payment-page.module';
import { PublisherPageModule } from './page/publisher-page/publisher-page.module';
import { TestimonialsPageModule } from './page/testimonials-page/testimonials-page.module';
import { LifeAtVcPageComponent } from './page/life-at-vc-page/life-at-vc-page.component';
import { OffersPageModule } from './page/offers-page/offers-page.module';
import { FAQPageModule } from './page/faq-page/faq-page.module';
import { PerformanceMarketingModule } from './performance-marketing/performance-marketing.module';
import { FaqHeroSectionModule } from './faq-hero-section/faq-hero-section.module';
import { AboutVcommissionSectionModule } from './about-vcommission-section/about-vcommission-section.module';
import { FaqImgSectionModule } from './faq-img-section/faq-img-section.module';
import { PaginationSectionModule } from './pagination-section/pagination-section.module';
import { OffersHeroSectionModule } from './offers-hero-section/offers-hero-section.module';
import { OffersCardSectionModule } from './offers-card-section/offers-card-section.module';
import { OffersCenterTextModule } from './offers-center-text/offers-center-text.module';
import { PerformanceMarketingHeroSectionModule } from './page/performance-marketing-hero-section/performance-marketing-hero-section.module';
import { BelieveSectionModule } from './believe-section/believe-section.module';
import { PerformanceMarketingImgModule } from './performance-marketing-img/performance-marketing-img.module';
import { ResultSectionModule } from './result-section/result-section.module';
import { ResultImgModule } from './result-img/result-img.module';
import { GrowthSectionModule } from './growth-section/growth-section.module';
import { EcommercePageModule } from './page/ecommerce-page/ecommerce-page.module';
import { EcommerceHeroSectionModule } from './ecommerce-hero-section/ecommerce-hero-section.module';
import { LeadGenrationPageModule } from './page/lead-genration-page/lead-genration-page.module';
import { LeadGenrationHeroSectionModule } from './lead-genration-hero-section/lead-genration-hero-section.module';
import { GoalSectionModule } from './goal-section/goal-section.module';
import { GoalImgModule } from './goal-img/goal-img.module';
import { JourneySectionModule } from './journey-section/journey-section.module';
import { JourneyImgModule } from './journey-img/journey-img.module';
import { QualifiedSectionModule } from './qualified-section/qualified-section.module';

@NgModule({
  declarations: [
    AppComponent,

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
    FAQPageModule,
    LifeAtVcPageModule,
    PartnersPageModule,
    PaymentPageModule,
    PerformanceMarketingModule,
    FaqHeroSectionModule,
    AboutVcommissionSectionModule,
    FaqImgSectionModule,
    PaginationSectionModule,
    OffersHeroSectionModule,
    OffersCardSectionModule,
    OffersCenterTextModule,
    PerformanceMarketingHeroSectionModule,
    BelieveSectionModule,
    PerformanceMarketingImgModule,
    ResultSectionModule,
    ResultImgModule,
    GrowthSectionModule,
    EcommercePageModule,
    EcommerceHeroSectionModule,
    LeadGenrationPageModule,
    LeadGenrationHeroSectionModule,
    GoalSectionModule,
    GoalImgModule,
    JourneySectionModule,
    JourneyImgModule,
    QualifiedSectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
