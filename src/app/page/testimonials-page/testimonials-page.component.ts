import { Component, OnInit } from '@angular/core';
import { testimonialsHeroData } from 'src/app/about/about-hero/aboutHero';
import { cardData } from 'src/app/json-data/cardData';

@Component({
  selector: 'app-testimonials-page',
  templateUrl: './testimonials-page.component.html',
  styleUrls: ['./testimonials-page.component.scss']
})
export class TestimonialsPageComponent implements OnInit {
  testimonialsHeroData=testimonialsHeroData;
  cardData=cardData
  constructor() { }

  ngOnInit(): void {
  }

}
