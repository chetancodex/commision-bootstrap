import { Component, OnInit } from '@angular/core';
import { herodata } from './performance-marketing-hero-section';

@Component({
  selector: 'app-performance-marketing-hero-section',
  templateUrl: './performance-marketing-hero-section.component.html',
  styleUrls: ['./performance-marketing-hero-section.component.scss']
})
export class PerformanceMarketingHeroSectionComponent implements OnInit {
  data=herodata
  constructor() { }

  ngOnInit(): void {
  }

}
