import { Component, OnInit } from '@angular/core';
import { hero } from './hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
data=hero
  constructor() { }

  ngOnInit(): void {
  }

}
