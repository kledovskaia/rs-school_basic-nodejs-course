import { errorBoundary } from './errorBoundary.js';
import * as functions from './lib.js';

const lib = {};

Object.entries(functions).forEach(([name, cb]) => {
  lib[name] = errorBoundary(cb);
});

lib.errorBoundary = errorBoundary;

export default lib;
