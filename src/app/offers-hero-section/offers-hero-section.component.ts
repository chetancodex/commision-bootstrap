import { Component, OnInit } from '@angular/core';
import { offerData } from './offers-hero-section';

@Component({
  selector: 'app-offers-hero-section',
  templateUrl: './offers-hero-section.component.html',
  styleUrls: ['./offers-hero-section.component.scss']
})
export class OffersHeroSectionComponent implements OnInit {
  Data=offerData
  constructor() { }

  ngOnInit(): void {
  }

}
