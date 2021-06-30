import { Component, Input, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-advertiser-and-publisher',
  templateUrl: './advertiser-and-publisher.component.html',
  styleUrls: ['./advertiser-and-publisher.component.scss']
})
export class AdvertiserAndPublisherComponent implements OnInit {
@Input()
data:any
  constructor(private _location: Location) { }

  ngOnInit(): void {
    
  }
  backClicked() {
    this._location.back();
  }
}
