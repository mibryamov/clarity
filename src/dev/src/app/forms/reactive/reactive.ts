/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ClarityIcons } from '@clr/icons';
import { EssentialShapes } from '@clr/icons/shapes/essential';
import { SocialShapes } from '@clr/icons/shapes/social';

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({ templateUrl: './reactive.html' })
export class FormsReactiveDemo {
  model = new FormGroup({
    basic: new FormControl(''),
    container: new FormControl(''),
    required: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(/asdfasdf/)]),
  });

  ngOnInit() {
    ClarityIcons.add(EssentialShapes);
    ClarityIcons.add(SocialShapes);
  }

  submit() {
    console.log(this);
  }
}
