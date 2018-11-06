/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const request = require('request');
const fs = require('fs');
const path = require('path');

request.get(
  'https://api.github.com/repos/vmware/clarity/stats/contributors',
  {
    headers: {
      'User-Agent': 'request',
    },
  },
  (_err, _response, data) => {
    fs.writeFileSync(path.join(__dirname, '../src/site-main/src/data/github.json'), data);
  }
);
