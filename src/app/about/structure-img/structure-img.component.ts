import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure-img',
  templateUrl: './structure-img.component.html',
  styleUrls: ['./structure-img.component.scss']
})
export class StructureImgComponent implements OnInit {
@Input()
data:any
  constructor() { }

  ngOnInit(): void {
  }

}
