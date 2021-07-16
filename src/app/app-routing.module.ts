import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffersPageComponent } from './page/offers-page/offers-page.component';
import { AboutPageComponent } from './page/about-page/about-page.component';
import { AdvertiserPageComponent } from './page/advertiser-page/advertiser-page.component';
import { AffilateMarketingPageComponent } from './page/affilate-marketing-page/affilate-marketing-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { LifeAtVcPageComponent } from './page/life-at-vc-page/life-at-vc-page.component';
import { OurVisionPageComponent } from './page/our-vision-page/our-vision-page.component';
import { PartnersPageComponent } from './page/partners-page/partners-page.component';
import { PaymentPageComponent } from './page/payment-page/payment-page.component';
import { PublisherPageComponent } from './page/publisher-page/publisher-page.component';
import { TestimonialsPageComponent } from './page/testimonials-page/testimonials-page.component';
import { FAQPageComponent } from './page/faq-page/faq-page.component';
import { PerformanceMarketingComponent } from './performance-marketing/performance-marketing.component';


const routes: Routes = [

  {
    path:'',
    component: HomePageComponent
  },
  {
    path: 'about',
    component:AboutPageComponent

  },
  {
    path: 'ourvision',
    component:OurVisionPageComponent
  },
  {
    path: 'affilatemarketing',
    component:AffilateMarketingPageComponent
  },
  {
    path: 'publisher',
    component:PublisherPageComponent
  },
  {
    path:'advertiser',
    component:AdvertiserPageComponent
  },
  {
    path:'testimonials',
    component:TestimonialsPageComponent
  },
  {
  path:'lifeAtVc',
  component:LifeAtVcPageComponent
  },
  {
  path:'offers-page',
  component:OffersPageComponent
  },
  {
  path:'faq-page',
  component:FAQPageComponent
  },
    {path: 'partners',
    component:PartnersPageComponent
  },
  {
    path:'payment',
    component:PaymentPageComponent
  },
  {
    path:'performance-marketing',
    component:PerformanceMarketingComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
