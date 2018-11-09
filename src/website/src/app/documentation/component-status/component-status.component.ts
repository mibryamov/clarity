import { Component } from '@angular/core';

import * as COMPONENTS from '../../../assets/components.json';

@Component({
  selector: 'component-status',
  templateUrl: 'component-status.component.html',
  host: {
    '[class.content-area]': 'true',
  },
})
export class ComponentStatusComponent {
  components = COMPONENTS.list;

  getUrl(item) {
    return item.url.split('#')[0];
  }

  getFragment(item) {
    return item.url.split('#')[1];
  }
}
