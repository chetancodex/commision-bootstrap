import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentHeroComponent } from './payment-hero.component';
import { HeaderModule } from 'src/app/header/header.module';

@NgModule({
  declarations: [PaymentHeroComponent],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports:[
    PaymentHeroComponent
  ]
})
export class PaymentHeroModule { }
