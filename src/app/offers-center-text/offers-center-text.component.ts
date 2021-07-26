import { Component, OnInit } from '@angular/core';
import { offerData } from './offers-center-text';

@Component({
  selector: 'app-offers-center-text',
  templateUrl: './offers-center-text.component.html',
  styleUrls: ['./offers-center-text.component.scss']
})
export class OffersCenterTextComponent implements OnInit {
  Data=offerData
  constructor() { }

  ngOnInit(): void {
  }

}
