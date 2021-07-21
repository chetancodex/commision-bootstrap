import { Component, OnInit } from '@angular/core';
import { growthdata,  } from './growth-section';

@Component({
  selector: 'app-growth-section',
  templateUrl: './growth-section.component.html',
  styleUrls: ['./growth-section.component.scss']
})
export class GrowthSectionComponent implements OnInit {
  data=growthdata
  constructor() { }

  ngOnInit(): void {
  }

}
