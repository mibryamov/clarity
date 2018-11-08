/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ChartShapes, ClrShapeLineChartSVG } from './chart-shapes';
import { descriptorConfig } from '../utils/descriptor-config';

/* tslint:disable:variable-name */

export * from './chart-shapes';

Object.defineProperty(ChartShapes, 'analytics', descriptorConfig(ClrShapeLineChartSVG));

if (typeof window !== 'undefined' && window.hasOwnProperty('ClarityIcons')) {
  window.ClarityIcons.add(ChartShapes);
}
