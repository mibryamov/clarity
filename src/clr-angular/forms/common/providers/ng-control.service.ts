/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NgControl } from '@angular/forms';

interface ControlInterface extends NgControl {
  id?: number;
}

let controlId = 0;

@Injectable()
export class NgControlService {
  private controls: ControlInterface[] = [];
  // Observable to subscribe to the control, since its not available immediately for projected content
  private _controlChanges = new Subject<ControlInterface[]>();
  get controlChanges(): Observable<ControlInterface[]> {
    return this._controlChanges.asObservable();
  }

  setControl(control: ControlInterface) {
    control.id = controlId++;
    this.controls.push(control);
    this._controlChanges.next(this.controls);
    return control.id;
  }

  removeControl(id: number) {
    const index = this.controls.findIndex(control => control.id === id);
    if (index > -1) {
      this.controls.splice(index, 1);
      this._controlChanges.next(this.controls);
    }
  }
}
