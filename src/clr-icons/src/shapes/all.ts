/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ChartShapes } from './chart';
import { CommerceShapes } from './commerce';
import { CoreShapes } from './core';
import { EssentialShapes } from './essential';
import { MediaShapes } from './media';
import { SocialShapes } from './social';
import { TechnologyShapes } from './technology';
import { TextEditShapes } from './text-edit';
import { TravelShapes } from './travel';

const allShapesSets = [
  CoreShapes,
  CommerceShapes,
  EssentialShapes,
  MediaShapes,
  SocialShapes,
  TechnologyShapes,
  TravelShapes,
  ChartShapes,
  TextEditShapes,
];

const allShapes: any = {};

for (const set of allShapesSets) {
  for (const shape in set) {
    if (set.hasOwnProperty(shape)) {
      allShapes[shape] = set[shape];
    }
  }
}

export { allShapes as AllShapes };
