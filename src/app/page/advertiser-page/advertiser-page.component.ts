import { Component, OnInit } from '@angular/core';
import { advertiserHeroData } from 'src/app/about/about-hero/aboutHero';
import { advertiserBgImage } from 'src/app/json-data/advertiser-bgImage';
import { advertiserWrapper } from 'src/app/json-data/our-vision-hero-wrapper';
import { advertiserWithUs } from 'src/app/json-data/patners';
import { publisherHandData } from 'src/app/json-data/publisher-hand';


@Component({
  selector: 'app-advertiser-page',
  templateUrl: './advertiser-page.component.html',
  styleUrls: ['./advertiser-page.component.scss']
})
export class AdvertiserPageComponent implements OnInit {
  advertiserHeroData=advertiserHeroData;
  advertiserWrapper=advertiserWrapper;
  publisherHandData=publisherHandData;
  data=advertiserBgImage;
  advertiserWithUs=advertiserWithUs

  constructor() { }

  ngOnInit(): void {
  }

}
