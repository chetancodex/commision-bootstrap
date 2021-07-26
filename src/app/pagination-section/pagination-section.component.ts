import { Component, OnInit } from '@angular/core';
import { faqData } from './pagination-section';

@Component({
  selector: 'app-pagination-section',
  templateUrl: './pagination-section.component.html',
  styleUrls: ['./pagination-section.component.scss']
})
export class PaginationSectionComponent implements OnInit {
  data=faqData
  constructor() { }

  ngOnInit(): void {
  }

}
