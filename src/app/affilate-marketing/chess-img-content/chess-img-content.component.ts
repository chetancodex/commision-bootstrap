import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chess-img-content',
  templateUrl: './chess-img-content.component.html',
  styleUrls: ['./chess-img-content.component.scss']
})
export class ChessImgContentComponent implements OnInit {
@Input()
data:any
  constructor() { }

  ngOnInit(): void {
  }

}
