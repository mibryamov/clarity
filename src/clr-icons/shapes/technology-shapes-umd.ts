/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
  ClrShapeCertificateSVG,
  ClrShapeHelixSVG,
  ClrShapeHostSVG,
  ClrShapeMobileSVG,
  ClrShapeNoWifiSVG,
  ClrShapePhoneHandsetSVG,
  ClrShapeRulerPencilSVG,
  ClrShapeTerminalSVG,
  TechnologyShapes,
} from './technology-shapes';
import { descriptorConfig } from '../utils/descriptor-config';

interface Window {
  ClarityIcons: any;
}

declare var window: Window;

/* tslint:disable:variable-name */

export * from './technology-shapes';

Object.defineProperty(TechnologyShapes, 'server', descriptorConfig(ClrShapeHostSVG));
Object.defineProperty(TechnologyShapes, 'command', descriptorConfig(ClrShapeTerminalSVG));
Object.defineProperty(TechnologyShapes, 'mobile-phone', descriptorConfig(ClrShapeMobileSVG));
Object.defineProperty(TechnologyShapes, 'license', descriptorConfig(ClrShapeCertificateSVG));
Object.defineProperty(TechnologyShapes, 'disconnected', descriptorConfig(ClrShapeNoWifiSVG));
Object.defineProperty(TechnologyShapes, 'receiver', descriptorConfig(ClrShapePhoneHandsetSVG));
Object.defineProperty(TechnologyShapes, 'design', descriptorConfig(ClrShapeRulerPencilSVG));
Object.defineProperty(TechnologyShapes, 'dna', descriptorConfig(ClrShapeHelixSVG));

if (typeof window !== 'undefined' && window.hasOwnProperty('ClarityIcons')) {
  window.ClarityIcons.add(TechnologyShapes);
}
