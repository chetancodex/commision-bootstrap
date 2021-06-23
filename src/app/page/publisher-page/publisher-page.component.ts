import { Component, OnInit } from '@angular/core';
import { publisherHeroData } from 'src/app/about/about-hero/aboutHero';
import { publisherHandData } from 'src/app/json-data/publisherHand';
import { publisherWrapperData } from 'src/app/json-data/publisherWrapper';

@Component({
  selector: 'app-publisher-page',
  templateUrl: './publisher-page.component.html',
  styleUrls: ['./publisher-page.component.scss']
})
export class PublisherPageComponent implements OnInit {
  publisherHeroData=publisherHeroData
  publisherWrapperData = publisherWrapperData;
  publisherHandData = publisherHandData
  constructor() { }

  ngOnInit(): void {
  }

}
