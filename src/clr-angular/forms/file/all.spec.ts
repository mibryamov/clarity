/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import FileContainerSpecs from './file-container.spec';
import FileSpecs from './file.spec';

describe('File component', function() {
  FileContainerSpecs();
  FileSpecs();
});
