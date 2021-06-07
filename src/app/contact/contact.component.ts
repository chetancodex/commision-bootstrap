import { Component, OnInit } from '@angular/core';
import { aboutContact } from './form';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
data=aboutContact
  constructor() { }

  ngOnInit(): void {
  }

}
