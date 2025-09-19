// This file is required by karma.conf.js and loads recursively all .spec and framework files

import "zone.js/testing";
import { getTestBed } from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";

declare const require: {
  context(
    path: string,
    deep?: boolean,
    pattern?: RegExp
  ): {
    keys(): string[];
    <T>(id: string): T;
  };
};

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

const context = require.context("./", true, /\.spec\.ts$/);
context.keys().forEach(context);
