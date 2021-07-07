import { Component, OnInit } from '@angular/core';
import { ourVisionHeroWrapper } from 'src/app/json-data/our-vision-hero-wrapper';
import { ourVisionPatners } from 'src/app/json-data/patners';

@Component({
  selector: 'app-our-vision-page',
  templateUrl: './our-vision-page.component.html',
  styleUrls: ['./our-vision-page.component.scss']
})
export class OurVisionPageComponent implements OnInit {
  ourVisionHeroWrapper=ourVisionHeroWrapper;
  ourVisionPatners=ourVisionPatners
  constructor() { }

  ngOnInit(): void {
  }

}
