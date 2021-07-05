import { Component, OnInit } from '@angular/core';
import { aboutHeroData } from 'src/app/about/about-hero/aboutHero';
import { horseImg } from 'src/app/about/horse-img/horse';
import { maxQualityPerformance } from 'src/app/json-data/aboutMaxQuality';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  horseImgData = horseImg;
  aboutHeroData = aboutHeroData;
  maxQualityPerformance =maxQualityPerformance
  constructor() { }

  ngOnInit(): void {
  }

}
