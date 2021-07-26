import { Component, OnInit } from '@angular/core';
import { faqData } from './faq-img-section';

@Component({
  selector: 'app-faq-img-section',
  templateUrl: './faq-img-section.component.html',
  styleUrls: ['./faq-img-section.component.scss']
})
export class FaqImgSectionComponent implements OnInit {
  data=faqData
  constructor() { }

  ngOnInit(): void {
  }

}
