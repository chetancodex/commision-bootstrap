import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-team-images',
  templateUrl: './team-images.component.html',
  styleUrls: ['./team-images.component.scss']
})
export class TeamImagesComponent implements OnInit {
  @Input()
  data:any;
  
  constructor() { }

  ngOnInit(): void {
  }
  
}
