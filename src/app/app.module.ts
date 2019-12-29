import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { OfficerListComponent } from './components/officer-list/officer-list.component';
import { OfficerDetailsComponent } from './components/officer-details/officer-details.component';
import { HomeComponent } from './components/home/home.component';

import { ROUTES } from './constants/routes';
import { TITLES } from './constants/titles';
import { OfficersComponent } from './pages/officers/officers.component';

const routes: Routes = [
  { path: ROUTES.HOME, component: HomeComponent, pathMatch: 'full', data: { title: TITLES.HOME } },
  { path: ROUTES.OFFICERS, component: OfficersComponent, pathMatch: 'full', data: { title: TITLES.OFFICERS } }
];

@NgModule({
  declarations: [
    AppComponent,
    OfficerListComponent,
    OfficerDetailsComponent,
    HomeComponent,
    OfficersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
