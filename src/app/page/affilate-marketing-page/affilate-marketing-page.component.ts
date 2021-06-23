import { Component, OnInit } from '@angular/core';
import { affilateMarketingHeroData } from 'src/app/about/about-hero/aboutHero';
import { affilateMarketingWrapperData } from 'src/app/json-data/affilateMarketingHeroWrapperData';

@Component({
  selector: 'app-affilate-marketing-page',
  templateUrl: './affilate-marketing-page.component.html',
  styleUrls: ['./affilate-marketing-page.component.scss']
})
export class AffilateMarketingPageComponent implements OnInit {
  affilateMarketingHeroData=affilateMarketingHeroData;
  affilateMarketingWrapperData=affilateMarketingWrapperData
  constructor() { }

  ngOnInit(): void {
  }

}
