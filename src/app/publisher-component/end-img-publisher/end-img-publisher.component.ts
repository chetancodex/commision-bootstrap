import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-end-img-publisher',
  templateUrl: './end-img-publisher.component.html',
  styleUrls: ['./end-img-publisher.component.scss']
})
export class EndImgPublisherComponent implements OnInit {
@Input()
data:any


  constructor() { }

  ngOnInit(): void {
  }

}
