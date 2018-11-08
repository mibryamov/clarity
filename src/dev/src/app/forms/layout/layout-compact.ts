/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ClarityIcons } from '@clr/icons';
import { SocialShapes } from '@clr/icons/shapes/social';

import { Component } from '@angular/core';

@Component({ selector: 'layout-compact-demo', templateUrl: './layout.html' })
export class FormsLayoutCompactDemo {
  layout = 'compact';
  grid = false;

  ngOnInit() {
    ClarityIcons.add(SocialShapes);
  }
}
