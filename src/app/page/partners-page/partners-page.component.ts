import { Component, OnInit } from '@angular/core';
import { partners } from 'src/app/about/about-hero/aboutHero';
import { LastImgWithPreviousNext } from '../../json-data/last-img-with-previous-next';

import { partnersListData } from 'src/app/json-data/partners-list-data';

@Component({
  selector: 'app-partners-page',
  templateUrl: './partners-page.component.html',
  styleUrls: ['./partners-page.component.scss']
})
export class PartnersPageComponent implements OnInit {
  partners=partners;
  partnersListData=partnersListData;
  LastImgWithPreviousNext=LastImgWithPreviousNext
  constructor() { }

  ngOnInit(): void {
  }

}
