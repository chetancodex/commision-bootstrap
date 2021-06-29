import { Component, OnInit } from '@angular/core';
import { testimonialsHeroData } from 'src/app/about/about-hero/aboutHero';

@Component({
  selector: 'app-testimonials-page',
  templateUrl: './testimonials-page.component.html',
  styleUrls: ['./testimonials-page.component.scss']
})
export class TestimonialsPageComponent implements OnInit {
  testimonialsHeroData=testimonialsHeroData
  constructor() { }

  ngOnInit(): void {
  }

}
