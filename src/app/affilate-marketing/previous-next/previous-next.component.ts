import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-previous-next',
  templateUrl: './previous-next.component.html',
  styleUrls: ['./previous-next.component.scss']
})
export class PreviousNextComponent implements OnInit {
  private _location: any;

  constructor() { }

  ngOnInit(): void {
  }
  backClicked() {
    this._location.back();
  }
}
