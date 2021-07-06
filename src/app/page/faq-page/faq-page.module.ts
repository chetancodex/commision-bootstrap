import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FAQPageComponent } from '../faq-page/faq-page.component';
import { HeaderModule } from 'src/app/header/header.module';



@NgModule({
  declarations: [
    FAQPageComponent
  ],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports:[
    FAQPageComponent
  ]
})
export class FAQPageModule { }
