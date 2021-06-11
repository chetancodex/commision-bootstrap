import { Component, Input, OnInit } from '@angular/core';
import { object } from './header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
data=object;
@Input()
isColorChanged = false;

  constructor() { }

  ngOnInit(): void {
  }

}
