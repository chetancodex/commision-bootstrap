import { Component, OnInit } from '@angular/core';
import { affilateMarketingHeroData } from 'src/app/about/about-hero/aboutHero';

@Component({
  selector: 'app-affilate-marketing-page',
  templateUrl: './affilate-marketing-page.component.html',
  styleUrls: ['./affilate-marketing-page.component.scss']
})
export class AffilateMarketingPageComponent implements OnInit {
  affilateMarketingHeroData=affilateMarketingHeroData
  constructor() { }

  ngOnInit(): void {
  }

}
