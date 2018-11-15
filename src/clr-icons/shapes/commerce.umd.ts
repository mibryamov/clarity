/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ClrShapePiggyBankSVG, CommerceShapes } from './commerce';
import { descriptorConfig } from '../utils/descriptor-config';

export * from './commerce';

Object.defineProperty(CommerceShapes, 'savings', descriptorConfig(ClrShapePiggyBankSVG));

if (typeof window !== 'undefined' && window.hasOwnProperty('ClarityIcons')) {
  window.ClarityIcons.add(CommerceShapes);
}
