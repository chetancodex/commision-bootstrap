import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './page/about-page/about-page.component';
import { AdvertiserPageComponent } from './page/advertiser-page/advertiser-page.component';
import { AffilateMarketingPageComponent } from './page/affilate-marketing-page/affilate-marketing-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { OurVisionPageComponent } from './page/our-vision-page/our-vision-page.component';
import { PublisherPageComponent } from './page/publisher-page/publisher-page.component';
import { TestimonialsPageComponent } from './page/testimonials-page/testimonials-page.component';


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
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
