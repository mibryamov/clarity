/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
  ClrShapeAngleDoubleSVG,
  ClrShapeAngleSVG,
  ClrShapeBarsSVG,
  ClrShapeBellSVG,
  ClrShapeCheckSVG,
  ClrShapeCogSVG,
  ClrShapeExclamationCircleSVG,
  ClrShapeExclamationTriangleSVG,
  ClrShapeFolderSVG,
  ClrShapeHomeSVG,
  ClrShapeInfoCircleSVG,
  ClrShapeTimesSVG,
  ClrShapeUserSVG,
  CoreShapes,
} from './core';
import { descriptorConfig } from '../utils/descriptor-config';

export * from './core';

Object.defineProperty(CoreShapes, 'house', descriptorConfig(ClrShapeHomeSVG));
Object.defineProperty(CoreShapes, 'settings', descriptorConfig(ClrShapeCogSVG));
Object.defineProperty(CoreShapes, 'success', descriptorConfig(ClrShapeCheckSVG));
Object.defineProperty(CoreShapes, 'close', descriptorConfig(ClrShapeTimesSVG));
Object.defineProperty(CoreShapes, 'warning', descriptorConfig(ClrShapeExclamationTriangleSVG));
Object.defineProperty(CoreShapes, 'error', descriptorConfig(ClrShapeExclamationCircleSVG));
Object.defineProperty(CoreShapes, 'info', descriptorConfig(ClrShapeInfoCircleSVG));
Object.defineProperty(CoreShapes, 'menu', descriptorConfig(ClrShapeBarsSVG));
Object.defineProperty(CoreShapes, 'avatar', descriptorConfig(ClrShapeUserSVG));
Object.defineProperty(CoreShapes, 'caret', descriptorConfig(ClrShapeAngleSVG));
Object.defineProperty(CoreShapes, 'directory', descriptorConfig(ClrShapeFolderSVG));
Object.defineProperty(CoreShapes, 'notification', descriptorConfig(ClrShapeBellSVG));
Object.defineProperty(CoreShapes, 'collapse', descriptorConfig(ClrShapeAngleDoubleSVG));

if (typeof window !== 'undefined' && window.hasOwnProperty('ClarityIcons')) {
  window.ClarityIcons.add(CoreShapes);
}
