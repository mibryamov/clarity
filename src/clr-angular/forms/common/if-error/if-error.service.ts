/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable, OnDestroy } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Observable, Subject, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { NgControlService } from '../providers/ng-control.service';

@Injectable()
export class IfErrorService implements OnDestroy {
  // Implement our own status changes observable, since Angular controls don't
  // fire on events like blur, and we want to return the control instead of a string
  private _statusChanges = new Subject<NgControl[]>();
  get statusChanges(): Observable<NgControl[]> {
    return this._statusChanges.asObservable();
  }

  private subscriptions: Subscription[] = [];
  private controlSubscriptions: Subscription[] = [];
  private controls: NgControl[];

  constructor(private ngControlService: NgControlService) {
    // Wait for the control to be available
    this.subscriptions.push(
      this.ngControlService.controlChanges.subscribe(controls => {
        this.controls = controls;
        this.listenForChanges();
      })
    );
  }

  // Subscribe to the status change events, only after touched and emit the control
  private listenForChanges() {
    this.cleanUpControls();
    this.controls.forEach(control => {
      this.subscriptions.push(
        control.statusChanges.pipe(filter(() => control.touched)).subscribe(() => {
          this._statusChanges.next(this.controls);
        })
      );
    });
  }

  // Allows a control to push a status check upstream, such as on blur
  triggerStatusChange() {
    if (this.controls.length) {
      this._statusChanges.next(this.controls);
    }
  }

  private cleanUpControls() {
    this.controlSubscriptions.forEach(sub => sub.unsubscribe());
  }

  // Clean up subscriptions
  ngOnDestroy() {
    this.cleanUpControls();
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
