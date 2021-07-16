import { Component, OnInit } from '@angular/core';
import { aboutHeroData } from 'src/app/about/about-hero/aboutHero';
import { horseImg } from 'src/app/about/horse-img/horse';
import { imageData } from 'src/app/json-data/about-above-beyond';
import { aboutAffilateMarketing } from 'src/app/json-data/about-affilate-marketing';
import { aboutEndImage } from 'src/app/json-data/about-end-img-data';
import { structureImg } from 'src/app/json-data/about-structure';
import { maxQualityPerformance } from 'src/app/json-data/aboutMaxQuality';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  horseImgData = horseImg;
  aboutHeroData = aboutHeroData;
  maxQualityPerformance =maxQualityPerformance;
  aboutAffilateMarketing=aboutAffilateMarketing;
  aboutEndImage=aboutEndImage;
  structureImg=structureImg;
  imageData=imageData
  constructor() { }

  ngOnInit(): void {
  }

}
