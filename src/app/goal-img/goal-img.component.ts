import { Component, OnInit } from '@angular/core';
import { goalimgdata } from './goal-img';

@Component({
  selector: 'app-goal-img',
  templateUrl: './goal-img.component.html',
  styleUrls: ['./goal-img.component.scss']
})
export class GoalImgComponent implements OnInit {
  data=goalimgdata
  constructor() { }

  ngOnInit(): void {
  }

}
