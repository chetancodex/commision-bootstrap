import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-publisher-hand',
  templateUrl: './publisher-hand.component.html',
  styleUrls: ['./publisher-hand.component.scss']
})
export class PublisherHandComponent implements OnInit {
@Input()
data:any

  constructor() { }

  ngOnInit(): void {
  }

}
