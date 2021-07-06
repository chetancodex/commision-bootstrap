import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-affilate-marketing',
  templateUrl: './affilate-marketing.component.html',
  styleUrls: ['./affilate-marketing.component.scss']
})
export class AffilateMarketingComponent implements OnInit {
@Input()
data:any;
  constructor() { }

  ngOnInit(): void {
  }

}
