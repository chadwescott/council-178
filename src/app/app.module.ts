import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { OfficerDetailsComponent } from './components/officer-details/officer-details.component';
import { OfficerListComponent } from './components/officer-list/officer-list.component';
import { ROUTES } from './constants/routes';
import { TITLES } from './constants/titles';
import { HomeComponent } from './pages/home/home.component';
import { OfficersComponent } from './pages/officers/officers.component';
import { MemberFormComponent } from './components/member-form/member-form.component';

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
    MainHeaderComponent,
    MainLayoutComponent,
    MemberFormComponent
  ],
  imports: [
    BrowserModule,
    AngularFireAnalyticsModule,
    AngularFireModule.initializeApp(environment.firebase, 'knights-of-columbus-178'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { useHash: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
