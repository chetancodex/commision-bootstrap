import { Component, OnInit } from '@angular/core';
import { affilateMarketingHeroData } from 'src/app/about/about-hero/aboutHero';
import { affilateMarketingChessContent } from 'src/app/json-data/affilate-marketing-chess-content';
import { affilateMarketingWrapperData } from 'src/app/json-data/affilate-marketing-hero-wrapper-data';
import { affilateMarketingStepByStepProcess } from 'src/app/json-data/affilate-marketing-step-by-step-process';

@Component({
  selector: 'app-affilate-marketing-page',
  templateUrl: './affilate-marketing-page.component.html',
  styleUrls: ['./affilate-marketing-page.component.scss']
})
export class AffilateMarketingPageComponent implements OnInit {
  affilateMarketingHeroData=affilateMarketingHeroData;
  affilateMarketingWrapperData=affilateMarketingWrapperData;
  affilateMarketingChessContent=affilateMarketingChessContent;
  affilateMarketingStepByStepProcess=affilateMarketingStepByStepProcess
  constructor() { }

  ngOnInit(): void {
  }

}
