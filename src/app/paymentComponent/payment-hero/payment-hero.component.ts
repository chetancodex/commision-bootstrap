import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-hero',
  templateUrl: './payment-hero.component.html',
  styleUrls: ['./payment-hero.component.scss']
})
export class PaymentHeroComponent implements OnInit {
@Input()
data:any
  constructor() { }

  ngOnInit(): void {
  }

}
