import { Component, OnInit } from '@angular/core';
import { affilateMarketingHeroData } from 'src/app/about/about-hero/aboutHero';

@Component({
  selector: 'app-affilate-marketing-hero',
  templateUrl: './affilate-marketing-hero.component.html',
  styleUrls: ['./affilate-marketing-hero.component.scss']
})
export class AffilateMarketingHeroComponent implements OnInit {
data=affilateMarketingHeroData
  constructor() { }

  ngOnInit(): void {
  }

}
