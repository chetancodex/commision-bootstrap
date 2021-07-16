import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.scss']
})
export class ChessComponent implements OnInit {
@Input()
data:any;
  constructor() { }

  ngOnInit(): void {
  }

}
