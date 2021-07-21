import { Component, OnInit } from '@angular/core';
import { faqData } from './faq-hero-section';

@Component({
  selector: 'app-faq-hero-section',
  templateUrl: './faq-hero-section.component.html',
  styleUrls: ['./faq-hero-section.component.scss']
})
export class FaqHeroSectionComponent implements OnInit {
  data=faqData
  constructor() { }

  ngOnInit(): void {
  }

}
