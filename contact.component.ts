// src/app/documents/contact/contact.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Optionally, you can define properties here to bind to your template
  email: string = 'info@dharma-travel.com';

}
