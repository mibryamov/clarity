import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { readFileSync, statSync, readdirSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import * as makeDir from 'make-dir';
import { copySync } from 'fs-extra';
import * as del from 'del';

import { enableProdMode } from '@angular/core';
// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import { renderModuleFactory } from '@angular/platform-server';

import * as express from 'express';
import { join } from 'path';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 4000;
const SOURCE_FOLDER = join(process.cwd(), 'dist/website/browser');
const DIST_FOLDER = join(process.cwd(), 'dist/website/deploy');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/website/server/main');

del.sync(DIST_FOLDER);
makeDir.sync(DIST_FOLDER);
copySync(SOURCE_FOLDER, DIST_FOLDER);

const index = readFileSync(join(DIST_FOLDER, 'index.html'), 'utf8');

renderModuleFactory(AppServerModuleNgFactory, {
  document: index,
  url: '/',
  extraProviders: [provideModuleMap(LAZY_MODULE_MAP)],
}).then(
  html => {
    writeFileSync(join(DIST_FOLDER, 'index.html'), html);
    // spinner.succeed();
    // return url;
  },
  error => {
    // spinner.fail('Unable to render ' + url);
    console.log(error);
  }
);
