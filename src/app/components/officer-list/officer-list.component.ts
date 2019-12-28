import { Component, OnInit, Input } from '@angular/core';
import { Officer } from 'src/models/officer';

@Component({
  selector: 'kofc-officer-list',
  templateUrl: './officer-list.component.html',
  styleUrls: ['./officer-list.component.scss']
})
export class OfficerListComponent implements OnInit {
  @Input() officers: Officer[];

  constructor() { }

  ngOnInit() {
  }

}
