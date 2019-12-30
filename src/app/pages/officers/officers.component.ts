import { Component, OnInit } from '@angular/core';
import { OfficerService } from 'src/app/services/officer.service';
import { Officer } from 'src/models/officer';

@Component({
  selector: 'kofc-officers',
  templateUrl: './officers.component.html',
  styleUrls: ['./officers.component.scss']
})
export class OfficersComponent implements OnInit {
  officers: Officer[];

  constructor(officerService: OfficerService) {
    officerService.getOfficers(2020).subscribe(x => this.officers = x);
  }

  ngOnInit() {
  }

}
