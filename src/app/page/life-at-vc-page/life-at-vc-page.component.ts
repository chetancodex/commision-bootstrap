import { Component, OnInit } from '@angular/core';
import { lifeVCommission } from '../../about/about-hero/aboutHero';
import { lifeVCommissionWrapper } from '../../json-data/aboutMaxQuality';
import { LastImgWithPreviousNext } from '../../json-data/last-img-with-previous-next';



import { teamImage } from 'src/app/json-data/team-image';


@Component({
  selector: 'app-life-at-vc-page',
  templateUrl: './life-at-vc-page.component.html',
  styleUrls: ['./life-at-vc-page.component.scss']
})
export class LifeAtVcPageComponent implements OnInit {
  lifeVCommission=lifeVCommission;
  lifeVCommissionWrapper=lifeVCommissionWrapper;
  teamImage=teamImage;
  LastImgWithPreviousNext=LastImgWithPreviousNext
  constructor() { }

  ngOnInit(): void {
  }

}
