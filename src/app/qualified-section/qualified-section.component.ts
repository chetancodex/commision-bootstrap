import { Component, OnInit } from '@angular/core';
import { qualifieddata } from './qualified-section';

@Component({
  selector: 'app-qualified-section',
  templateUrl: './qualified-section.component.html',
  styleUrls: ['./qualified-section.component.scss']
})
export class QualifiedSectionComponent implements OnInit {
  data=qualifieddata
  constructor() { }

  ngOnInit(): void {
  }

}
