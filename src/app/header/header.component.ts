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
@Input()
isPositionRelative = false;
@Input()
isPositionAbsolute = false;
@Input()
isDisplayNone = false;
@Input()
isHeightFullVH = false;
@Input()
isHamburgerColorWhite =false;
// isRightcolAbsolute = false;
// isLeftcolAbsolute = false;
// isrowAbsolute = false;

  constructor() { }

  ngOnInit(): void {
  }


}
