import { Component, OnInit } from '@angular/core';
import { smallTreeImageData } from 'src/app/about/horse-img/horse';

@Component({
  selector: 'app-small-tree-img',
  templateUrl: './small-tree-img.component.html',
  styleUrls: ['./small-tree-img.component.scss']
})
export class SmallTreeImgComponent implements OnInit {
  smallTreeImageData = smallTreeImageData;
  constructor() { }

  ngOnInit(): void {
  }

}
