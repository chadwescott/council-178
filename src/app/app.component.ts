import { Component } from '@angular/core';
import { Officer } from 'src/models/officer';
import { OfficerService } from './services/officer.service';

@Component({
  selector: 'kofc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Knights of Columbus Council #178';

  officers: Officer[];

  public constructor(private _officerService: OfficerService) {
    _officerService.getOfficers(2020).subscribe(x => this.officers = x);
  }
}
