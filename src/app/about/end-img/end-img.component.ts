import { Component, Input, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-end-img',
  templateUrl: './end-img.component.html',
  styleUrls: ['./end-img.component.scss']
})
export class EndImgComponent implements OnInit {
@Input()
data:any
  constructor(private _location: Location) { }

  ngOnInit(): void {
  }
  backClicked() {
    this._location.back();
  }
}
