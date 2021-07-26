import { Component, OnInit } from '@angular/core';
import { offerData } from './offers-card-section';

@Component({
  selector: 'app-offers-card-section',
  templateUrl: './offers-card-section.component.html',
  styleUrls: ['./offers-card-section.component.scss']
})
export class OffersCardSectionComponent implements OnInit {
  Data=offerData
  constructor() { }

  ngOnInit(): void {
  }

}
