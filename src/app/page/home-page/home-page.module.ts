import { TeamModule } from './../../team/team.module';
import { ChessModule } from './../../chess/chess.module';
import { OurVisionModule } from './../../our-vision/our-vision.module';
import { HeroModule } from './../../hero/hero.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from 'src/app/header/header.module';
import { PerformanceModule } from 'src/app/performance/performance.module';
import { HomePageComponent } from './home-page.component';
import { AdvertisersModule } from 'src/app/advertisers/advertisers.module';
import { ContactModule } from 'src/app/contact/contact.module';




@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HeaderModule,
    HeroModule,
    OurVisionModule,
    ChessModule,
    PerformanceModule,
    TeamModule,
    AdvertisersModule,
    ContactModule,
    

  ],
  exports:[HomePageComponent]
})
export class HomePageModule { }
