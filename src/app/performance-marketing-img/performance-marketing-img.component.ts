import { Component, OnInit } from '@angular/core';
import { imagedata } from './performance-marketing-img';

@Component({
  selector: 'app-performance-marketing-img',
  templateUrl: './performance-marketing-img.component.html',
  styleUrls: ['./performance-marketing-img.component.scss']
})
export class PerformanceMarketingImgComponent implements OnInit {
  data=imagedata
  constructor() { }

  ngOnInit(): void {
  }

}
