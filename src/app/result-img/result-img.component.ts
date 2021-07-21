import { Component, OnInit } from '@angular/core';
import { resultimgdata } from './result-img';

@Component({
  selector: 'app-result-img',
  templateUrl: './result-img.component.html',
  styleUrls: ['./result-img.component.scss']
})
export class ResultImgComponent implements OnInit {
  data=resultimgdata
  constructor() { }

  ngOnInit(): void {
  }

}
