import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-max-quality-performance',
  templateUrl: './max-quality-performance.component.html',
  styleUrls: ['./max-quality-performance.component.scss']
})
export class MaxQualityPerformanceComponent implements OnInit {
@Input()
data:any
  constructor() { }

  ngOnInit(): void {
  }

}
