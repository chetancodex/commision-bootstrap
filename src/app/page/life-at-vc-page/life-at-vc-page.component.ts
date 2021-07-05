import { Component, OnInit } from '@angular/core';
import { lifeVCommission } from 'src/app/about/about-hero/aboutHero';
import { lifeVCommissionWrapper } from 'src/app/json-data/aboutMaxQuality';
import { teamImage } from 'src/app/json-data/teamImage';


@Component({
  selector: 'app-life-at-vc-page',
  templateUrl: './life-at-vc-page.component.html',
  styleUrls: ['./life-at-vc-page.component.scss']
})
export class LifeAtVcPageComponent implements OnInit {
  lifeVCommission=lifeVCommission;
  lifeVCommissionWrapper=lifeVCommissionWrapper;
  teamImage=teamImage
  constructor() { }

  ngOnInit(): void {
  }

}
