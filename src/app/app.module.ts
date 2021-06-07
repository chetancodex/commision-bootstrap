import { ContactModule } from './contact/contact.module';
import { TeamModule } from './team/team.module';
import { OurVisionModule } from './our-vision/our-vision.module';
import { ChessModule } from './chess/chess.module';
import { HeroModule } from './hero/hero.module';
import { HeaderModule } from './header/header.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdvertisersModule } from './advertisers/advertisers.module';
import { PerformanceModule } from './performance/performance.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HeaderModule,
    HeroModule,
    ChessModule,
    OurVisionModule,
    AdvertisersModule,
    PerformanceModule,
    TeamModule,
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
