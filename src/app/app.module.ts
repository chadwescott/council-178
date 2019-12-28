import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OfficerListComponent } from './components/officer-list/officer-list.component';
import { OfficerDetailsComponent } from './components/officer-details/officer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    OfficerListComponent,
    OfficerDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
