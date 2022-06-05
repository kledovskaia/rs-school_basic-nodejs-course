import { parseArgv } from './parseArgv.js';

function init() {
  let params;
  try {
    params = parseArgv();
    console.log(params);
  } catch (error) {
    console.error(`[Error reading parameters]: ${error.message}`);
  }
}

init();
