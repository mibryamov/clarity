import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EngageComponent } from './engage/engage.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'community', pathMatch: 'full', redirectTo: 'engage' },
  { path: 'engage', component: EngageComponent },
];

@NgModule({
  declarations: [AppComponent, HomeComponent, EngageComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    ClarityModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
