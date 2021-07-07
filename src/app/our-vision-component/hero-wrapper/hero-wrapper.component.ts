import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-wrapper',
  templateUrl: './hero-wrapper.component.html',
  styleUrls: ['./hero-wrapper.component.scss']
})
export class HeroWrapperComponent implements OnInit {
@Input()
data:any
  constructor() { }

  ngOnInit(): void {
  }

}
