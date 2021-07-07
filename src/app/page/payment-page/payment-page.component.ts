import { Component, OnInit } from '@angular/core';
import { paymentHeroData } from 'src/app/json-data/payment-hero';


@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent implements OnInit {
  paymentHeroData=paymentHeroData
  constructor() { }

  ngOnInit(): void {
  }

}
