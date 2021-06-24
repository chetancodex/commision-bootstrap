import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-by-step-process',
  templateUrl: './step-by-step-process.component.html',
  styleUrls: ['./step-by-step-process.component.scss']
})
export class StepByStepProcessComponent implements OnInit {
@Input()
data:any
  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }


}
