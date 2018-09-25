/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  Directive,
  Renderer2,
  ElementRef,
  HostListener,
  OnInit,
  Optional,
  ViewContainerRef,
  OnDestroy,
} from '@angular/core';
import { NgControl } from '@angular/forms';

import { IfErrorService } from '../common/if-error/if-error.service';
import { ControlClassService } from '../common/providers/control-class.service';
import { NgControlService } from '../common/providers/ng-control.service';
import { WrappedFormControl } from '../common/wrapped-control';
import { ClrSelectContainer } from './select-container';

@Directive({ selector: '[clrSelect]', host: { '[class.clr-select]': 'true' } })
export class ClrSelect extends WrappedFormControl<ClrSelectContainer> implements OnInit, OnDestroy {
  constructor(
    vcr: ViewContainerRef,
    @Optional() private ngControlService: NgControlService,
    @Optional() private ifErrorService: IfErrorService,
    @Optional() private control: NgControl,
    @Optional() controlClassService: ControlClassService,
    el: ElementRef,
    renderer: Renderer2
  ) {
    super(ClrSelectContainer, vcr, 1);
    if (controlClassService) {
      controlClassService.initControlClass(renderer, el.nativeElement);
    }
  }

  ngOnInit() {
    super.ngOnInit();
    if (this.ngControlService) {
      this.controlId = this.ngControlService.setControl(this.control);
    }
  }

  @HostListener('blur')
  onBlur() {
    if (this.ifErrorService) {
      this.ifErrorService.triggerStatusChange();
    }
  }

  ngOnDestroy() {
    if (this.ngControlService) {
      this.ngControlService.removeControl(this.controlId);
    }
  }
}
