import { Component, OnInit } from '@angular/core';
import { adboutPageData } from './performance';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {
data = adboutPageData;
  constructor() { }

  ngOnInit(): void {
  }

}
