import { Component, OnInit } from '@angular/core';
import { homeChessData } from 'src/app/json-data/home-chess';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  homeChessData=homeChessData
  constructor() { }

  ngOnInit(): void {
  }

}
