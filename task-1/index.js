import lib from './lib/index.js';

function init() {
  const params = lib.getParams();
  lib.validate(params);
}

init();
