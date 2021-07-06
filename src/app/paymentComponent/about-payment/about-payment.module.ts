import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPaymentComponent } from './about-payment.component';



@NgModule({
  declarations: [AboutPaymentComponent],
  imports: [
    CommonModule
  ],
  exports:[AboutPaymentComponent]
})
export class AboutPaymentModule { }
