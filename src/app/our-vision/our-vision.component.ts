import { Component, OnInit } from '@angular/core';
import { datas } from './our-vision';

@Component({
  selector: 'app-our-vision',
  templateUrl: './our-vision.component.html',
  styleUrls: ['./our-vision.component.scss']
})
export class OurVisionComponent implements OnInit {
data = datas
  constructor() { }

  ngOnInit(): void {
  }

}
