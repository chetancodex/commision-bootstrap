import { Component, OnInit } from '@angular/core';
import { faqData } from './faq-page.data';
@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss'],
})
export class FAQPageComponent implements OnInit {
  data=faqData
  constructor() { }

  ngOnInit(): void {
  }
}
