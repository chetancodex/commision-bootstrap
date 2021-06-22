
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageModule } from './page/about-page/about-page.module';
import { AffilateMarketingPageModule } from './page/affilate-marketing-page/affilate-marketing-page.module';
import { HomePageModule } from './page/home-page/home-page.module';
import { OurVisionPageModule } from './page/our-vision-page/our-vision-page.module';
import { PublisherPageModule } from './page/publisher-page/publisher-page.module';















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
    PublisherPageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
