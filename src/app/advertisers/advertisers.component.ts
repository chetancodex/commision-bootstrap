import { Component, OnInit } from '@angular/core';
import { imageItems } from './any';

@Component({
  selector: 'app-advertisers',
  templateUrl: './advertisers.component.html',
  styleUrls: ['./advertisers.component.scss']
})
export class AdvertisersComponent implements OnInit {
data=imageItems
  constructor() { }

  ngOnInit(): void {
  }

}
