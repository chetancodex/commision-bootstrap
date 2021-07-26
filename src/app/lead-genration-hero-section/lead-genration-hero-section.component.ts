import { Component, OnInit } from '@angular/core';
import { herodata } from './lead-genration-hero-section';

@Component({
  selector: 'app-lead-genration-hero-section',
  templateUrl: './lead-genration-hero-section.component.html',
  styleUrls: ['./lead-genration-hero-section.component.scss']
})
export class LeadGenrationHeroSectionComponent implements OnInit {
  data=herodata
  constructor() { }

  ngOnInit(): void {
  }

}
