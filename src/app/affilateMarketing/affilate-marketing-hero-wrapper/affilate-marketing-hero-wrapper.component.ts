import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-affilate-marketing-hero-wrapper',
  templateUrl: './affilate-marketing-hero-wrapper.component.html',
  styleUrls: ['./affilate-marketing-hero-wrapper.component.scss']
})
export class AffilateMarketingHeroWrapperComponent implements OnInit {
@Input()
data:any
  constructor() { }

  ngOnInit(): void {
  }

}
