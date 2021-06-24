import { Component, OnInit } from '@angular/core';
import { advertiserHeroData } from 'src/app/about/about-hero/aboutHero';

@Component({
  selector: 'app-advertiser-page',
  templateUrl: './advertiser-page.component.html',
  styleUrls: ['./advertiser-page.component.scss']
})
export class AdvertiserPageComponent implements OnInit {
  advertiserHeroData=advertiserHeroData
  constructor() { }

  ngOnInit(): void {
  }

}
