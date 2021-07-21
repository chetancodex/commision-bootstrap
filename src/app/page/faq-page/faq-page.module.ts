import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FAQPageComponent } from '../faq-page/faq-page.component';
import { HeaderModule } from 'src/app/header/header.module';import { FaqHeroSectionModule } from 'src/app/faq-hero-section/faq-hero-section.module';
import { AboutVcommissionSectionModule } from 'src/app/about-vcommission-section/about-vcommission-section.module';
import { FaqImgSectionModule } from 'src/app/faq-img-section/faq-img-section.module';
import { PaginationSectionModule } from 'src/app/pagination-section/pagination-section.module';
;

@NgModule({
  declarations: [
    FAQPageComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FaqHeroSectionModule,
    AboutVcommissionSectionModule,
    FaqImgSectionModule,
    PaginationSectionModule
  ],
  exports:[
    FAQPageComponent
  ]
})
export class FAQPageModule { }
