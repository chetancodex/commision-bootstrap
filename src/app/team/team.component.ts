import { Component, OnInit } from '@angular/core';
import { teamAbout,  } from './team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
data=teamAbout
  constructor() { }

  ngOnInit(): void {
  }

}
