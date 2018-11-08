/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { TextEditShapes } from './text-edit-shapes';

/* tslint:disable:variable-name */

export * from './text-edit-shapes';

if (typeof window !== 'undefined' && window.hasOwnProperty('ClarityIcons')) {
  window.ClarityIcons.add(TextEditShapes);
}
