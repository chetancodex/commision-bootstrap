import { Component, OnInit } from '@angular/core';
import { ecommercedata } from './ecommerce-hero-section';

@Component({
  selector: 'app-ecommerce-hero-section',
  templateUrl: './ecommerce-hero-section.component.html',
  styleUrls: ['./ecommerce-hero-section.component.scss']
})
export class EcommerceHeroSectionComponent implements OnInit {
  data=ecommercedata
  constructor() { }

  ngOnInit(): void {
  }

}
