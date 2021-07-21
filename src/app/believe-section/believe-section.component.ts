import { Component, OnInit } from '@angular/core';
import { believedata } from './believe-section';

@Component({
  selector: 'app-believe-section',
  templateUrl: './believe-section.component.html',
  styleUrls: ['./believe-section.component.scss']
})
export class BelieveSectionComponent implements OnInit {
  data=believedata
  constructor() { }

  ngOnInit(): void {
  }

}
