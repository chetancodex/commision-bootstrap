import { Component, OnInit } from '@angular/core';
import { publisherHeroData } from 'src/app/about/about-hero/aboutHero';
import { endImgPublisherData } from 'src/app/json-data/end-img-publisher';
import { publisherHandData } from 'src/app/json-data/publisher-hand';
import { publisherWrapperData } from 'src/app/json-data/publisher-wrapper';

@Component({
  selector: 'app-publisher-page',
  templateUrl: './publisher-page.component.html',
  styleUrls: ['./publisher-page.component.scss']
})
export class PublisherPageComponent implements OnInit {
  publisherHeroData=publisherHeroData
  publisherWrapperData = publisherWrapperData;
  publisherHandData = publisherHandData;
  endImgPublisherData =endImgPublisherData
  constructor() { }

  ngOnInit(): void {
  }

}
