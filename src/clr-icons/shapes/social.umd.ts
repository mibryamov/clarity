/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ClrShapeEnvelopeSVG, ClrShapeStarSVG, SocialShapes } from './social';
import { descriptorConfig } from '../utils/descriptor-config';
import { ClrShapeCalendarSVG } from './core';

export * from './social';

Object.defineProperty(SocialShapes, 'favorite', descriptorConfig(ClrShapeStarSVG));
Object.defineProperty(SocialShapes, 'email', descriptorConfig(ClrShapeEnvelopeSVG));
Object.defineProperty(SocialShapes, 'date', descriptorConfig(ClrShapeCalendarSVG));

if (typeof window !== 'undefined' && window.hasOwnProperty('ClarityIcons')) {
  window.ClarityIcons.add(SocialShapes);
}
