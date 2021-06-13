import { Component, OnInit } from '@angular/core';
import { horseImg } from 'src/app/about/horse-img/horse';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  horseImgData = horseImg;
  constructor() { }

  ngOnInit(): void {
  }

}
