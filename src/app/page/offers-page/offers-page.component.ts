import { Component, OnInit } from '@angular/core';
import { offerData } from './offers-page-data';
@Component({
  selector: 'app-offers-page',
  templateUrl: './offers-page.component.html',
  styleUrls: ['./offers-page.component.scss']
})
export class OffersPageComponent implements OnInit {
  Data=offerData
  constructor() { }

  ngOnInit(): void {
  }
}
