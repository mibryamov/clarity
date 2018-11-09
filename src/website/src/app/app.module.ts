import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EngageComponent } from './engage/engage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReleasesComponent } from './releases/releases.component';
import { ReleaseComponent } from './release/release.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'community', pathMatch: 'full', redirectTo: 'engage' },
  { path: 'engage', component: EngageComponent },
  { path: 'icons', loadChildren: './icons/icons.module#IconsModule' },
  { path: 'documentation', loadChildren: './documentation/documentation.module#DocumentationModule' },
  { path: 'releases', component: ReleasesComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EngageComponent,
    PageNotFoundComponent,
    ReleasesComponent,
    ReleaseComponent,
  ],
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
