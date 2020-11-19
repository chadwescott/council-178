import { Component, OnInit } from '@angular/core';
import { ROUTES } from 'src/app/constants/routes';

@Component({
  selector: 'kofc-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  routes = ROUTES;

  constructor() { }

  ngOnInit() {
  }

}
