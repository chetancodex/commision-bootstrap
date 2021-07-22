import { Component, OnInit } from '@angular/core';
import { journeydata } from './journey-section';

@Component({
  selector: 'app-journey-section',
  templateUrl: './journey-section.component.html',
  styleUrls: ['./journey-section.component.scss']
})
export class JourneySectionComponent implements OnInit {
  data=journeydata
  constructor() { }

  ngOnInit(): void {
  }

}
