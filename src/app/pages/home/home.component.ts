import { Component, OnInit } from '@angular/core';
import { EditorChangeContent } from 'ngx-quill';

@Component({
  selector: 'kofc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  html: string;
  message: string;
  title: string;

  constructor() { }

  ngOnInit() {
  }

  changedEditor(event: EditorChangeContent) {
    this.html = event.html;
  }

  save(): void {
    this.message = this.html;
    console.log(this.message);
  }
}
