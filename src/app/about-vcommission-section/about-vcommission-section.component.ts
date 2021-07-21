import { Component, OnInit } from '@angular/core';
import { faqData } from './about-vcommission-section';

@Component({
  selector: 'app-about-vcommission-section',
  templateUrl: './about-vcommission-section.component.html',
  styleUrls: ['./about-vcommission-section.component.scss']
})
export class AboutVcommissionSectionComponent implements OnInit {
  data=faqData
  constructor() { }

  ngOnInit(): void {
  }

}
