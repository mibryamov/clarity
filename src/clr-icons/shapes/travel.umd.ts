/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ClrShapeAirplaneSVG, ClrShapeCarSVG, TravelShapes } from './travel';
import { descriptorConfig } from '../utils/descriptor-config';

Object.defineProperty(TravelShapes, 'plane', descriptorConfig(ClrShapeAirplaneSVG));
Object.defineProperty(TravelShapes, 'auto', descriptorConfig(ClrShapeCarSVG));

if (typeof window !== 'undefined' && window.hasOwnProperty('ClarityIcons')) {
  window.ClarityIcons.add(TravelShapes);
}
