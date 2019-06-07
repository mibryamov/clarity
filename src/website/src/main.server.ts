/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';

// Express Engine
export { ngExpressEngine } from '@nguniversal/express-engine';

// Import module map for lazy loading
export { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
