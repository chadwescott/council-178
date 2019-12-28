import { Component, OnInit, Input } from '@angular/core';
import { Officer } from 'src/models/officer';

@Component({
  selector: 'kofc-officer-details',
  templateUrl: './officer-details.component.html',
  styleUrls: ['./officer-details.component.scss']
})
export class OfficerDetailsComponent implements OnInit {
  @Input() officer: Officer;

  constructor() { }

  ngOnInit() {
  }

}
