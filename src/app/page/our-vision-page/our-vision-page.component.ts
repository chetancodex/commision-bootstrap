import { Component, OnInit } from '@angular/core';
import { ourVisionHeroWrapper } from 'src/app/json-data/ourVisionHeroWrapper';

@Component({
  selector: 'app-our-vision-page',
  templateUrl: './our-vision-page.component.html',
  styleUrls: ['./our-vision-page.component.scss']
})
export class OurVisionPageComponent implements OnInit {
  ourVisionHeroWrapper=ourVisionHeroWrapper
  constructor() { }

  ngOnInit(): void {
  }

}
