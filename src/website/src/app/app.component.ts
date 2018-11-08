import { Component } from '@angular/core';
import * as PackageJSON from '../../../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'website';
  package = PackageJSON;
}
