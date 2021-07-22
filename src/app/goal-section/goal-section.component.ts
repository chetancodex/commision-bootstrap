import { Component, OnInit } from '@angular/core';
import { goaldata } from './goal-section';

@Component({
  selector: 'app-goal-section',
  templateUrl: './goal-section.component.html',
  styleUrls: ['./goal-section.component.scss']
})
export class GoalSectionComponent implements OnInit {
  data=goaldata
  constructor() { }

  ngOnInit(): void {
  }

}
