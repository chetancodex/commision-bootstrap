import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-above-and-beyond',
  templateUrl: './above-and-beyond.component.html',
  styleUrls: ['./above-and-beyond.component.scss']
})
export class AboveAndBeyondComponent implements OnInit {
@Input()
data:any;
  constructor() { }

  ngOnInit(): void {
  }

}
