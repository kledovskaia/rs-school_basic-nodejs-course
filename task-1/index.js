import { parseArgv } from './parseArgv.js';
import { errorBoundary } from './errorBoundary.js';

function init() {
  const params = errorBoundary(parseArgv);
}

init();
