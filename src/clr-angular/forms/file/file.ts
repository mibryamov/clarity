/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, Optional, ViewContainerRef, Renderer2, ElementRef, Injector, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

import { ClrFileContainer } from './file-container';
import { WrappedFormControl } from '../common/wrapped-control';

@Directive({ selector: '[clrFile]', host: { '[class.clr-file]': 'true' } })
export class ClrFile extends WrappedFormControl<ClrFileContainer> {
  protected index = 1;
  public ref: ElementRef;

  constructor(
    vcr: ViewContainerRef,
    injector: Injector,
    @Self()
    @Optional()
    control: NgControl,
    renderer: Renderer2,
    el: ElementRef
  ) {
    super(vcr, ClrFileContainer, injector, control, renderer, el);
    this.ref = el;
  }
}
