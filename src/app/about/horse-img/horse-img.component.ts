import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-horse-img',
  templateUrl: './horse-img.component.html',
  styleUrls: ['./horse-img.component.scss']
})
export class HorseImgComponent implements OnInit {

  @Input()
  data:any;

  constructor() { }

  ngOnInit(): void {
  }

}
