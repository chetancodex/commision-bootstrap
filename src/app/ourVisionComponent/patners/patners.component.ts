import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-patners',
  templateUrl: './patners.component.html',
  styleUrls: ['./patners.component.scss']
})
export class PatnersComponent implements OnInit {
  private _location: any;

  constructor(_private_location: Location) { }

  ngOnInit(): void {
  }
  backClicked() {
    this._location.back();
  }

}
