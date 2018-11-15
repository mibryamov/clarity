/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
  ClrShapeBanSVG,
  ClrShapeBoltSVG,
  ClrShapeBubbleExclamationSVG,
  ClrShapeFileSVG,
  ClrShapeLoginSVG,
  ClrShapeLogoutSVG,
  ClrShapeNoteSVG,
  ClrShapeOrganizationSVG,
  ClrShapePaperclipSVG,
  ClrShapePencilSVG,
  ClrShapePinboardSVG,
  ClrShapePlusSVG,
  ClrShapeResizeSVG,
  ClrShapeShrinkSVG,
  ClrShapeTimesCircleSVG,
  ClrShapeUsersSVG,
  EssentialShapes,
} from './essential';
import { descriptorConfig } from '../utils/descriptor-config';

export * from './essential';

Object.defineProperty(EssentialShapes, 'edit', descriptorConfig(ClrShapePencilSVG));
Object.defineProperty(EssentialShapes, 'note-edit', descriptorConfig(ClrShapeNoteSVG));
Object.defineProperty(EssentialShapes, 'group', descriptorConfig(ClrShapeUsersSVG));
Object.defineProperty(EssentialShapes, 'document', descriptorConfig(ClrShapeFileSVG));
Object.defineProperty(EssentialShapes, 'add', descriptorConfig(ClrShapePlusSVG));
Object.defineProperty(EssentialShapes, 'cancel', descriptorConfig(ClrShapeBanSVG));
Object.defineProperty(EssentialShapes, 'remove', descriptorConfig(ClrShapeTimesCircleSVG));
Object.defineProperty(EssentialShapes, 'sign-in', descriptorConfig(ClrShapeLoginSVG));
Object.defineProperty(EssentialShapes, 'sign-out', descriptorConfig(ClrShapeLogoutSVG));
Object.defineProperty(EssentialShapes, 'lightning', descriptorConfig(ClrShapeBoltSVG));
Object.defineProperty(EssentialShapes, 'flow-chart', descriptorConfig(ClrShapeOrganizationSVG));
Object.defineProperty(EssentialShapes, 'alert', descriptorConfig(ClrShapeBubbleExclamationSVG));
Object.defineProperty(EssentialShapes, 'pinned', descriptorConfig(ClrShapePinboardSVG));
Object.defineProperty(EssentialShapes, 'attachment', descriptorConfig(ClrShapePaperclipSVG));
Object.defineProperty(EssentialShapes, 'resize-down', descriptorConfig(ClrShapeShrinkSVG));
Object.defineProperty(EssentialShapes, 'resize-up', descriptorConfig(ClrShapeResizeSVG));

if (typeof window !== 'undefined' && window.hasOwnProperty('ClarityIcons')) {
  window.ClarityIcons.add(EssentialShapes);
}
