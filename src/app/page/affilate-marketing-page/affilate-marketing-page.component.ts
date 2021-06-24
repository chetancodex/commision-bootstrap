import { Component, OnInit } from '@angular/core';
import { affilateMarketingHeroData } from 'src/app/about/about-hero/aboutHero';
import { affilateMarketingChessContent } from 'src/app/json-data/affilateMarketingChessContent';
import { affilateMarketingWrapperData } from 'src/app/json-data/affilateMarketingHeroWrapperData';
import { affilateMarketingStepByStepProcess } from 'src/app/json-data/affilateMarketingStepByStepProcess';

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
