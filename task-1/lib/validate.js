import * as validators from './validateParams.js';

export function validate(params) {
  for (const type in validators) {
    validators[type](params[type]);
  }
}
