/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const path = require('path');
const exec = require('child_process').execSync;

const base = path.join(__dirname, '../');

const packageDiff = exec(`git diff ${base}/package.json`, { encoding: 'utf8' });
const packageLockDiff = exec(`git diff ${base}/package-lock.json`, { encoding: 'utf8' });

if (packageLockDiff && !packageDiff) {
  console.error(
    'The package-lock.json file has changes without corresponding changes to package.json. Please revert package-lock.json.'
  );
  process.exit(1);
}
