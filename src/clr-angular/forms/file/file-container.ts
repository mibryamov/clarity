/**
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ContentChild, OnDestroy, Optional, forwardRef, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgControl } from '@angular/forms';

import { IfErrorService } from '../common/if-error/if-error.service';
import { NgControlService } from '../common/providers/ng-control.service';
import { LayoutService } from '../common/providers/layout.service';
import { DynamicWrapper } from '../../utils/host-wrapping/dynamic-wrapper';
import { ControlIdService } from '../common/providers/control-id.service';
import { ClrLabel } from '../common/label';
import { ClrFile } from './file';
import { ControlClassService } from '../common/providers/control-class.service';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';

@Component({
  selector: 'clr-file-container',
  template: `
    <ng-content select="label"></ng-content>
    <label *ngIf="!label && addGrid()"></label>
    <div class="clr-control-container" [ngClass]="controlClass()">
        <div class="clr-file-wrapper">
          <label class="clr-control-label clr-no-grid"><span class="btn btn-sm">{{clrBrowseLabel}}</span></label>
          <ng-content select="[clrFile]"></ng-content>
        </div>
        <clr-icon *ngIf="invalid" class="clr-validate-icon" shape="exclamation-circle" aria-hidden="true"></clr-icon>
        <ng-content select="clr-control-helper" *ngIf="!invalid && !files.length"></ng-content>
        <clr-control-helper *ngIf="files.length">{{files.join(', ')}}</clr-control-helper>
        <ng-content select="clr-control-error" *ngIf="invalid"></ng-content>
    </div>
    `,
  host: {
    '[class.clr-form-control]': 'true',
    '[class.clr-form-control-disabled]': 'control?.disabled',
    '[class.clr-row]': 'addGrid()',
  },
  providers: [IfErrorService, NgControlService, ControlIdService, ControlClassService],
})
export class ClrFileContainer implements DynamicWrapper, OnDestroy {
  private subscriptions: Subscription[] = [];
  invalid = false;
  _dynamic = false;
  @ContentChild(ClrLabel, { static: false })
  label: ClrLabel;
  @ContentChild(forwardRef(() => ClrFile), { static: true })
  file: ClrFile;
  control: NgControl;
  @Input() clrBrowseLabel = this.commonStrings.fileUploadButton;

  get files(): File[] {
    const files = [];
    if (this.file) {
      for (let i = 0; i < this.file.ref.nativeElement.files.length; i++) {
        files.push(this.file.ref.nativeElement.files.item(i).name);
      }
    }
    return files;
  }

  constructor(
    private ifErrorService: IfErrorService,
    @Optional() private layoutService: LayoutService,
    private controlClassService: ControlClassService,
    private ngControlService: NgControlService,
    private commonStrings: ClrCommonStrings
  ) {
    this.subscriptions.push(
      this.ifErrorService.statusChanges.subscribe(invalid => {
        this.invalid = invalid;
      })
    );
    this.subscriptions.push(
      this.ngControlService.controlChanges.subscribe(control => {
        this.control = control;
      })
    );
  }

  controlClass() {
    return this.controlClassService.controlClass(this.invalid, this.addGrid());
  }

  addGrid() {
    if (this.layoutService && !this.layoutService.isVertical()) {
      return true;
    }
    return false;
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.map(sub => sub.unsubscribe());
    }
  }
}
