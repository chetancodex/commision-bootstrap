import { Component, OnInit } from '@angular/core';
import { resultdata } from './result-section';

@Component({
  selector: 'app-result-section',
  templateUrl: './result-section.component.html',
  styleUrls: ['./result-section.component.scss']
})
export class ResultSectionComponent implements OnInit {
  data=resultdata
  constructor() { }

  ngOnInit(): void {
  }

}
