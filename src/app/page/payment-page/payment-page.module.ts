import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentPageComponent } from './payment-page.component';
import { AboutHeroModule } from 'src/app/about/about-hero/about-hero.module';
import { AboutPaymentModule } from 'src/app/paymentComponent/about-payment/about-payment.module';
import { PaymentHeroModule } from 'src/app/paymentComponent/payment-hero/payment-hero.module';



@NgModule({
  declarations: [PaymentPageComponent],
  imports: [
    CommonModule,
    // AboutHeroModule,
    // AboutPaymentModule
       PaymentHeroModule,
       AboutPaymentModule
       
    
  ],
  exports:[PaymentPageComponent]
})
export class PaymentPageModule { }
