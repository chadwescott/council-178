import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { QuillModule } from 'ngx-quill';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { OfficerDetailsComponent } from './components/officer-details/officer-details.component';
import { OfficerListComponent } from './components/officer-list/officer-list.component';
import { ROUTES } from './constants/routes';
import { TITLES } from './constants/titles';
import { HomeComponent } from './pages/home/home.component';
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
    OfficersComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    QuillModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
