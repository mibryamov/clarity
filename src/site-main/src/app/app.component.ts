import { Component } from '@angular/core';
import * as PackageJSON from '../../../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'site-main';
  package = PackageJSON;
}
