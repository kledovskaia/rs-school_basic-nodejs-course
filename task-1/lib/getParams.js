import * as paramValidators from './validateParams.js';

export function getParams() {
  const paramNames = createParamNames();
  const params = {};

  process.argv.slice(2).forEach((arg, i, args) => {
    if (!(i % 2)) {
      const name = paramNames[arg];
      if (!name) {
        throw new Error(`Parameter ${arg} is unknown`);
      }
      params[name] = args[i + 1];
    }
  });

  return params;
}

function createParamNames() {
  const paramNames = Object.keys(paramValidators).reduce((obj, paramName) => {
    obj[`--${paramName}`] = paramName;
    const shortCut = `-${paramName[0]}`
    if (obj[shortCut]) {
      obj[shortCut] = null;
      return obj
    }
    obj[shortCut] = paramName;
    return obj;
  }, {});
  return paramNames;
}
