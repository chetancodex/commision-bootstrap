import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersPageComponent } from './offers-page.component';
import { HeaderModule } from 'src/app/header/header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OffersHeroSectionModule } from 'src/app/offers-hero-section/offers-hero-section.module';
import { OffersCardSectionModule } from 'src/app/offers-card-section/offers-card-section.module';
import { OffersCenterTextModule } from 'src/app/offers-center-text/offers-center-text.module';

@NgModule({
  declarations: [
    OffersPageComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule,
    OffersHeroSectionModule,
    OffersCardSectionModule,
    OffersCenterTextModule
  ],
  exports:[
    OffersPageComponent
  ]
})
export class OffersPageModule { }
