import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertiserPageComponent } from './advertiser-page.component';
import { AboutHeroModule } from 'src/app/about/about-hero/about-hero.module';



@NgModule({
  declarations: [AdvertiserPageComponent],
  imports: [
    CommonModule,
    AboutHeroModule
  ],
  exports:[AdvertiserPageComponent]
})
export class AdvertiserPageModule { }
