import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertiser-and-publisher',
  templateUrl: './advertiser-and-publisher.component.html',
  styleUrls: ['./advertiser-and-publisher.component.scss']
})
export class AdvertiserAndPublisherComponent implements OnInit {
@Input()
data:any
  constructor() { }

  ngOnInit(): void {
  }

}
