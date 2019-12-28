import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Officer } from 'src/models/officer';

@Injectable({
  providedIn: 'root'
})
export class OfficerService {

  constructor() { }

  public getOfficers(year: number): Observable<Officer[]> {
    const officers = [
      new Officer('Joseph', 'Argenta', 'Grand Knight', '/assets/images/grand-knight-jewel.jpg', '', '', 2020),
      new Officer('Paul', 'Bookmiller', 'Deputy Grand Knight', '/assets/images/deputy-grand-knight-jewel.jpg', '', '', 2020),
      new Officer('Fr. Fred', 'Assuming', 'Chaplain', '/assets/images/chaplain-jewel.jpg', '', '', 2020),
      new Officer('Chad', 'Wescott', 'Chancellor', '/assets/images/chancellor-jewel.jpg', '', '', 2020),
      new Officer('Ron', 'Quatrochci', 'Recorder', '/assets/images/recorder-jewel.jpg', '', '', 2020),
      new Officer('Gary', 'Fouquet', 'Financial Secretary', '/assets/images/financial-secretary-jewel.jpg', '', '', 2020),
      new Officer('Tony', 'Liccione', 'Treasurer', '/assets/images/treasurer-jewel.jpg', '', '', 2020),
      new Officer('John', 'Valenti', 'Warden', '/assets/images/warden-jewel.jpg', '', '', 2020),
      new Officer('Dennis', 'Culhane', 'Inside Guard', '/assets/images/inside-guard-jewel.jpg', '', '', 2020),
      new Officer('Dan', 'Statt', 'Outside Guard', '/assets/images/outside-guard-jewel.jpg', '', '', 2020),
      new Officer('Bernie', 'Garren', 'Trustee', '/assets/images/trustee-jewel.jpg', '', '', 2020),
      new Officer('Ken', 'Latragna', 'Trustee', '/assets/images/trustee-jewel.jpg', '', '', 2020)
    ];
    return of(officers);
  }
}
