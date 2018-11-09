import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'documentation',
  templateUrl: 'documentation.component.html',
  styleUrls: ['documentation.component.scss'],
  host: {
    '[class.content-container]': 'true',
    '[class.layout-documentation]': 'true',
  },
})
export class DocumentationComponent {
  environment = environment;
}
