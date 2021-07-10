import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-img-with-previous-next',
  templateUrl: './last-img-with-previous-next.component.html',
  styleUrls: ['./last-img-with-previous-next.component.scss']
})
export class LastImgWithPreviousNextComponent implements OnInit {
@Input()
data:any
  constructor() { }

  ngOnInit(): void {
  }

}
