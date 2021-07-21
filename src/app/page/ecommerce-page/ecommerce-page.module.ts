import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommercePageComponent } from './ecommerce-page.component';
import { HeaderModule } from 'src/app/header/header.module';
import { EcommerceHeroSectionModule } from 'src/app/ecommerce-hero-section/ecommerce-hero-section.module';



@NgModule({
  declarations: [
    EcommercePageComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    EcommerceHeroSectionModule
  ],
  exports:[
    EcommercePageComponent
  ]
})
export class EcommercePageModule { }
