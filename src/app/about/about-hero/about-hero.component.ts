import { Component, Input, OnInit } from '@angular/core';
import { object } from 'src/app/header/header';




@Component({
  selector: 'app-about-hero',
  templateUrl: './about-hero.component.html',
  styleUrls: ['./about-hero.component.scss']
})
export class AboutHeroComponent implements OnInit {
data=object
@Input()
aboutData:any;

  constructor() { }

  ngOnInit(): void {
  }

}
