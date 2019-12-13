/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class DateFormControlService {
  value;

  private _touchedChange: Subject<void> = new Subject<void>();

  get touchedChange(): Observable<void> {
    return this._touchedChange.asObservable();
  }

  markAsTouched(): void {
    this._touchedChange.next();
  }

  private _clearedChange: Subject<void> = new Subject<void>();

  get clearedChange(): Observable<void> {
    return this._clearedChange.asObservable();
  }

  clear(): void {
    this._clearedChange.next();
  }

  private _dirtyChange: Subject<void> = new Subject<void>();

  get dirtyChange(): Observable<void> {
    return this._dirtyChange.asObservable();
  }

  markAsDirty(): void {
    this._dirtyChange.next();
  }
}
