import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-publisher-wrapper',
  templateUrl: './publisher-wrapper.component.html',
  styleUrls: ['./publisher-wrapper.component.scss']
})
export class PublisherWrapperComponent implements OnInit {
@Input()
  data:any;
  constructor() { }

  ngOnInit(): void {
  }

}
