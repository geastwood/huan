import isPlainObject from 'lodash.isplainobject';
import {reduce} from './fp';
import curry from './core/curry2';

/**
 * @level 1
 */
export default curry((f, u) => {
  return isPlainObject(u) ? reduce((carry, key) => {
    carry[key] = f(u[key]);
    return carry;
  }, {}, Object.keys(u)) : u.map(v => f(v));
});
