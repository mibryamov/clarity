/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ClarityIcons } from '@clr/icons';
import { EssentialShapes } from '@clr/icons/shapes/essential-shapes';
import { SocialShapes } from '@clr/icons/shapes/social-shapes';

import { Component } from '@angular/core';

@Component({ templateUrl: './select.html' })
export class FormsSelectDemo {
  ngOnInit() {
    ClarityIcons.add(EssentialShapes);
    ClarityIcons.add(SocialShapes);
  }
}
