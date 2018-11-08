/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ClarityIcons } from '@clr/icons';
import { EssentialShapes } from '@clr/icons/shapes/essential-shapes';
import { SocialShapes } from '@clr/icons/shapes/social-shapes';
import { TechnologyShapes } from '@clr/icons/shapes/technology-shapes';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'clr-tree-view-dynamic-1-demo',
  styleUrls: ['../tree-view.demo.scss'],
  templateUrl: './tree-view-dynamic-test.html',
})
export class TreeViewDynamicTestDemo {
  @Input('clrDemoShowHalf') showHalf: boolean = true;

  ngOnInit() {
    ClarityIcons.add(EssentialShapes);
    ClarityIcons.add(SocialShapes);
    ClarityIcons.add(TechnologyShapes);
  }

  projects = [
    { name: 'Project A', badge: 'A', versions: [{ number: '1', languages: [{ name: 'TS' }] }] },
    {
      name: 'Project B',
      badge: 'B',
      versions: [{ number: '2', languages: [{ name: 'GO' }] }],
    },
    {
      name: 'Project C',
      badge: 'C',
      versions: [{ number: '3', languages: [{ name: 'JS' }, { name: 'JAVA' }] }],
    },
  ];
}
